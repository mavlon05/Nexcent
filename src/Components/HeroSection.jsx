import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useFetch from "../Components/Usefetch";
import { useTranslation } from "react-i18next"; 

function HeroSection() {
  const { data: heroData, loading, error } = useFetch("/db.json");
  const { t, i18n } = useTranslation(); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {heroData?.HeroSection.map(({ id, title, description, img }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col md:flex-row justify-center w-full h-[599px] items-center gap-8 px-4 md:px-8 lg:px-12 mt-10">
            <div className="text-center md:text-left">
              <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold">
                {title[i18n.language]?.split(" ")[0]}{" "}
                <span className="text-green-500 block">
                  {title[i18n.language]?.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="font-medium text-gray-500 text-[14px] sm:text-[16px] lg:text-[18px]">
                {description[i18n.language]}
              </p>
              <button className="bg-green-500 hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition-all duration-300 w-[128px] sm:w-[150px] h-[52px] rounded-[4px] text-white mt-8">
              {t('learnbtn.h1')} 
              </button>
            </div>
            <div>
              <img className="w-full max-w-[300px] md:max-w-[391px] h-auto" src={img} alt="Illustration" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSection;
