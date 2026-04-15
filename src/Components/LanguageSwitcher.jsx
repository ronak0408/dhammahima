import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // 👈 import the actual instance

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const availableLanguages = ["en", "hi", "ta", "te", "mr", "bn"];

  const getLanguageName = (code) => {
    switch (code) {
      case "en": return "English";
      case "hi": return "हिंदी";
      case "ta": return "தமிழ்";
      case "te": return "తెలుగు";
      case "mr": return "मराठी";
      case "bn": return "বাংলা";
      default: return "English";
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // ✅ works now
  };

  return (
    <div className="relative group">
      <button className="px-2 py-1 bg-gray-800 rounded-md text-sm hover:bg-gray-700">
        {getLanguageName(i18n.language)}
      </button>
      <div className="absolute right-0 mt-1 w-32 bg-gray-900 border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 ${
              i18n.language === lang ? "text-yellow-400" : "text-white"
            }`}
          >
            {getLanguageName(lang)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
