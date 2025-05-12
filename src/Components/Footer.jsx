
import { useTranslation } from "react-i18next";
import { useState } from "react";
import next from "../../public/Images/Logo.png";
import send from "../../public/Images/send.png";

// React Icons
import { FaInstagram, FaTwitter, FaGlobe, FaYoutube } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleEmailSubmit = () => {
    if (email.trim() && email.includes("@") && email.includes(".")) {
      setMessage("Email submitted successfully!");
      setIsError(false);
      setTimeout(() => setMessage(""), 3000);
      setEmail("");
    } else {
      setMessage("Invalid email address");
      setIsError(true);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const icons = [FaInstagram, FaGlobe, FaTwitter, FaYoutube];

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
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 text-white cursor-pointer transition-all duration-300 hover:text-green-500"
              />
            ))}
          </div>
        </div>

        {/* Company & Support: yonma-yon mobil ekranda */}
<div className="flex flex-row flex-wrap gap-20 justify-center md:flex-wrap md:items-start md:gap-32">
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
</div>


        {/* Email form */}
        <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
          <h1 className="font-semibold text-xl text-white">{t("footer.stay_up_to_date")}</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="relative w-full sm:w-[255px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.email_placeholder")}
                className="w-full h-10 pl-4 pr-12 bg-slate-600 rounded-md text-white placeholder-white focus:outline-none"
              />
              <img
                src={send}
                alt="Send"
                onClick={handleEmailSubmit}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer hover:scale-110 transition-all"
              />
            </div>
            {message && (
              <span className={`text-sm mt-1 ${isError ? "text-red-400" : "text-green-400"}`}>
                {message}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
