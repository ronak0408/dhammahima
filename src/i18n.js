// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Add this package
import LanguageDetector from 'i18next-browser-languagedetector'; // Add this package

// Import translation files
import enTranslation from './i18n/locales/en/translation.json';
import hiTranslation from './i18n/locales/hi/translation.json';
import taTranslation from './i18n/locales/ta/translation.json';
import teTranslation from './i18n/locales/te/translation.json';
import mrTranslation from './i18n/locales/mr/translation.json';
import bnTranslation from './i18n/locales/bn/translation.json';

// Alternative: If you want to load translations asynchronously
// i18n
//   .use(Backend) // loads translations from your server
//   .use(LanguageDetector) // detect user language
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     }
//   });

// Synchronous loading (better for smaller apps)
const resources = {
  en: { translation: enTranslation },
  hi: { translation: hiTranslation },
  ta: { translation: taTranslation },
  te: { translation: teTranslation },
  mr: { translation: mrTranslation },
  bn: { translation: bnTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;