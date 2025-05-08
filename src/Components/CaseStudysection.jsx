import { useTranslation } from "react-i18next";
import useFetch from './Usefetch';

function CaseStudysection() {
  const { data: CaseStudy, loading, error } = useFetch("/db.json");
  const { t, i18n } = useTranslation(); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {CaseStudy.CaseStudysection.map((item) => {
        return (
          <div key={item.id} className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-24 px-6 md:px-0">
        
            <img
              className="w-full max-w-[471px] h-auto"
              src={item.image} 
              alt={item.titlePart1[i18n.language]} 
            />

        
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-center md:text-left text-[28px] md:text-[36px] font-semibold leading-tight">
                {item.titlePart1[i18n.language]} <br /> {item.titlePart2[i18n.language]} 
              </h1>
              <p className="text-center md:text-left text-[14px] md:text-[16px] font-medium text-gray-500 mt-4">
                {item.description[i18n.language]} 
              </p>
              <button
                className="w-[151px] bg-green-500 hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition-all duration-300 text-white mt-10 h-[52px] text-[16px] rounded-[4px] font-medium"
              >
                {t('learnbtn.h1')} 
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CaseStudysection;
