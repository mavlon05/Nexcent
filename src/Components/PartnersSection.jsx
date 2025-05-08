import useFetch from "./Usefetch";
import { useTranslation } from "react-i18next";


function PartnersSection() {
  const { data: PartnerData, loading, error } = useFetch("/db.json");
       const { t,i18n} = useTranslation(); 
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 px-4 py-20">

      {PartnerData.partners.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">

          
          <div className="flex-shrink-0 w-full sm:w-auto">
            <img src={item.image} alt="Partner Main" className="w-full max-w-[500px] h-auto object-cover" />
          </div>

          
          <div className="text-center sm:text-left">
            <p className="font-medium text-[16px] sm:text-[18px] text-gray-600 mb-6">
              {item.description[i18n.language]}
            </p>

            <p className="text-[20px] font-semibold text-green-500 mb-1">
              {item.name[i18n.language]}
            </p>
            <p className="text-[16px] font-medium text-gray-500 mb-6">
              {item.organization[i18n.language]}
            </p>

            
            <div className="flex items-center flex-wrap justify-center gap-6 mb-6">
              {item.logos.map((logo, index) => (
                <img key={index} className="w-[40px] h-[40px]" src={logo} alt={`logo-${index}`} />
              ))}
            </div>

        
            <div className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer">
              <h1 className="text-[20px] font-semibold text-green-500">
                Meet all customers
              </h1>
              <img src={item.rightIcon} alt="Right Arrow" className="w-[24px] h-[24px]" />
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default PartnersSection;
