import useFetch from "../Components/Usefetch";
import { useTranslation } from "react-i18next";

function AdditionalBlog() {
  const { data: Adetiondata, loading, error } = useFetch("/db.json");
  const { t, i18n } = useTranslation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-16 px-6 md:px-0">
      {/* Title */}
      <h1 className="text-center text-[28px] md:text-[36px] font-semibold text-gray-800">
        {t("additionalBlog.title")}
      </h1>
      <p className="text-center text-[14px] md:text-[16px] font-medium text-gray-500 mt-4">
        {t("additionalBlog.description")}
      </p>

      {/* Blog Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-16 relative z-0">
        {Adetiondata.AdditionalBlog.map((item, index) => (
          <div key={index} className="relative w-full max-w-[350px]">
            {/* Blog Image */}
            <img
              src={item.image}
              alt={item.alt[i18n.language]}
              className="rounded-lg object-cover w-full h-[250px] md:h-[280px]"
            />

            {/* Floating Card */}
            <div className="absolute left-1/2 bottom-[-80px] transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-[317px] h-[176px] flex flex-col justify-center items-center text-center p-5">
              <h2 className="text-[16px] md:text-[20px] font-semibold text-gray-700 leading-7">
                {item.heading[i18n.language]}
              </h2>

              {/* Read More */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-green-600 font-semibold text-[14px] md:text-[16px]">
                  {t("additionalBlog.readmore")}
                </span>
                <img
                  src={item.buttonIcon}
                  alt="arrow"
                  className="w-[20px] h-[20px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalBlog;
