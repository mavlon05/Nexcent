import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector'; 

import enTranslation from '../../public/Language/en.json';
import uzTranslation from '../../public/Language/uz.json';
import ruTranslation from '../../public/Language/ru.json';


i18n
  .use(languageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslation },
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
    },
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
