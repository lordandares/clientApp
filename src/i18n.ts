import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './locale/en'
i18n.use(initReactI18next).init({
  resources: {
    en,
  }, // Where we're gonna put translations' files
  lng: 'en', // Set the initial language of the App
})
