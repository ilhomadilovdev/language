import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./languages/en.json";
import ru from "./languages/ru.json";
import uz from "./languages/uz.json"


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            ru: { translation: ru },
            en: { translation: en },
        },
        lng: "uz",
        fallbackLng: "uz",
        debug: true,

       
    });





