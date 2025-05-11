import useFetch from "./Usefetch";
import { useTranslation } from "react-i18next";

function PartnersSection() {
  const { data: PartnerData, loading, error } = useFetch("/db.json");
  const { t, i18n } = useTranslation();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#F9F9F9] py-12 px-4 sm:px-8 lg:px-20">
      {PartnerData.partners.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-14 bg-white rounded-xl shadow-sm p-6 sm:p-10  mx-auto"
        >
          <div className="bg-gradient-to-br from-[#0e0e0e] to-[#1e1e1e] rounded-lg p-5 flex items-center justify-center shadow-md">
            <img
              src={item.image}
              alt="Partner"
              className="w-[250px] h-[250px] object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed mb-5">
              {item.description[i18n.language]}
            </p>

            <p className="text-green-600 font-semibold text-[16px] mb-1">
              {item.name[i18n.language]}
            </p>
            <p className="text-gray-500 text-[14px] mb-6">
              {item.organization[i18n.language]}
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {item.logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[36px] h-[36px] hover:scale-105 transition-transform"
                >
                  <img
                    src={logo.src}
                    alt={`logo-${index}`}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}

              <a
                href={item.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 font-semibold text-[15px] hover:underline ml-auto"
              >
                Meet all customers
                <img
                  src={item.rightIcon}
                  alt="arrow"
                  className="w-[18px] h-[18px]"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PartnersSection;
