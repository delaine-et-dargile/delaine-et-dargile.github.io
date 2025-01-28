import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en'
import fr from './i18n/fr'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en.translation },
    fr: { translation: fr.translation },
  },
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
