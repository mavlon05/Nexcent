import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  // Tashqariga bosish (Outside Click)ni aniqlash
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative language-switcher">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-transparent hover:text-green-500 border-2 border-green-500 transition-all duration-300"
        aria-label="Tilni tanlash"
      >
        <span className="font-medium">
          {selectedLanguage === 'en' && 'English'}
          {selectedLanguage === 'ru' && 'Русский'}
          {selectedLanguage === 'uz' && "O'zbek"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-300 z-20">
          <button
            onClick={() => handleLanguageChange('en')}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('ru')}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
          >
            Русский
          </button>
          <button
            onClick={() => handleLanguageChange('uz')}  
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
          >
            O'zbek
          </button>
        </div>
      )}
    </div>  );
};

export default LanguageSwitcher;
