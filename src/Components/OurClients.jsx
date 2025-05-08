import useFetch from "../Components/Usefetch";
import { useTranslation } from "react-i18next";


function OurClients() {
  
  const { data: OurclientsData, loading, error } = useFetch("/db.json");
   const { t } = useTranslation(); 


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="py-8 px-4 mt-20 ">
      <h1 className="text-[36px] font-semibold text-gray-600 text-center">
      {t('ourclients.h1')}

      </h1>
      <p className="text-[16px] font-medium text-gray-500 text-center mb-8">
        {t('ourclients.h2')}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-12 items-center justify-center">
        {OurclientsData.OurClients.map((item) => {
          return (
            <img
              key={item.id}
              src={item.img}
              alt={item.alt}
              className="w-[48px] h-[48px] object-contain mx-auto"
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurClients;
