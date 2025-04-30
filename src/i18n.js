import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationRU from './locales/ru/common.json'
import translationUA from './locales/ua/common.json'

const resources = {
    ru: { common: translationRU },
    ua: { common: translationUA },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') || 'ua',
        fallbackLng: 'ru',
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;