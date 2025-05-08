import i18n from "../i18n/i18n";
import useFetch from "./Usefetch";
import { useTranslation } from "react-i18next"; 


function FeaturesSection() {
  const { data: FeatureData, loading, error } = useFetch("/db.json");
  const { t} = useTranslation(); 


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-[36px] font-semibold text-gray-600">
          {t('feature.h1')}
        </h1>
        <p className="text-[16px] font-medium text-gray-500 mt-4">
        {t('feature.h2')}

          
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28 py-10 mt-20">
        {FeatureData.FeaturesSection.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <img
              className="w-[50px] h-[49px] mb-4"
              src={item.img}
              alt={item.title1[i18n.language]}
            />
            <h2 className="text-[28px] font-bold text-gray-600 mb-2">
              {item.title1[i18n.language]} <br /> {item.title2[i18n.language]}
            </h2>
            <p className="text-[14px] font-medium text-gray-500">
              {item.description[i18n.language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
