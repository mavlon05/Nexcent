import { useTranslation } from "react-i18next";
import next from "../../public/Images/Logo.png";
import instagram from "../../public/Images/Instagram.png";
import Browser from "../../public/Images/browser.png";
import Twitwer from "../../public/Images/Twiter.png";
import Youtube from "../../public/Icons2/Youtube.png";
import send from "../../public/Images/send.png";

function Footer() {
  const { t } = useTranslation(); // i18n kutubxonasini chaqirish

  return (
    <footer className="bg-slate-900 absolute left-0 w-full z-30 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-10">
        {/* Logo va matn */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img className="w-[137px] h-[25px]" src={next} alt="Nexcent logo" />
          <p className="text-white text-sm leading-relaxed text-center md:text-left">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <img
              className="w-8 h-8 hover:opacity-80 transition-all cursor-pointer"
              src={instagram}
              alt="Instagram"
            />
            <img
              className="w-8 h-8 hover:opacity-80 transition-all cursor-pointer"
              src={Browser}
              alt="Browser"
            />
            <img
              className="w-8 h-8 hover:opacity-80 transition-all cursor-pointer"
              src={Twitwer}
              alt="Twitter"
            />
            <img
              className="w-8 h-8 hover:opacity-80 transition-all cursor-pointer"
              src={Youtube}
              alt="YouTube"
            />
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="font-semibold text-xl text-white">{t("footer.company")}</h1>
          <ul className="text-white text-sm flex flex-col gap-2 text-center md:text-left">
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.about_us")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.blog")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.contact_us")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.pricing")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.testimonials")}</li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="font-semibold text-xl text-white">{t("footer.support")}</h1>
          <ul className="text-white text-sm flex flex-col gap-2 text-center md:text-left">
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.help_center")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.terms_of_service")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.legal")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.privacy_policy")}</li>
            <li className="hover:text-green-500 transition-all cursor-pointer">{t("footer.status")}</li>
          </ul>
        </div>

        {/* Stay up to date */}
        <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
          <h1 className="font-semibold text-xl text-white">{t("footer.stay_up_to_date")}</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-[255px]">
              <input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="w-full h-10 pl-4 pr-12 bg-slate-600 rounded-md text-white placeholder-white focus:outline-none"
              />
              <img
                src={send}
                alt="Send"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
