import useFetch from "./Usefetch";
import { useTranslation } from "react-i18next";

function StatisticSection() {
  const { data, loading, error } = useFetch("/db.json");
  const { t, i18n } = useTranslation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full max-w-full py-10 px-4 sm:px-6 md:px-12 mt-10 bg-slate-100 rounded-md flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-24">
      
      <div className="w-full max-w-[500px] text-center lg:text-left">
        <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-bold text-gray-800 leading-tight">
          {t('statisticSection.title').split(t('statisticSection.highlight'))}
          <br />
          <span className="text-green-500">{t('statisticSection.highlight')}</span>
        </h1>
        <p className="mt-4 text-[13px] sm:text-[15px] md:text-[16px] text-gray-500 font-medium">
          {t('statisticSection.description')}
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-6 sm:gap-8">
        {data.statistics.map((item) => (
          <div key={item.id} className="flex items-start gap-3 sm:gap-4">
            <img
              className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[48px] md:h-[48px]"
              src={item.icon}
              alt={item.label[i18n.language]}
            />
            <div>
              <h2 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-gray-800">
                {item.number}
              </h2>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] text-gray-500 font-medium">
                {item.label[i18n.language]}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default StatisticSection;
