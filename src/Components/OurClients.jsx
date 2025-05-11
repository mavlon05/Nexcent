import useFetch from "../Components/Usefetch";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function OurClients() {
  const { data: OurclientsData, loading, error } = useFetch("/db.json");
  const { t } = useTranslation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-8 px-4 mt-20">
      <h1 className="text-[36px] font-semibold text-gray-600 text-center">
        {t('ourclients.h1')}
      </h1>
      <p className="text-[16px] font-medium text-gray-500 text-center mb-8">
        {t('ourclients.h2')}
      </p>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="px-12"
      >
        {OurclientsData.OurClients.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center items-center">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.alt}
                className="w-[48px] h-[48px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurClients;
