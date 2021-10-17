import React, { useState } from "react";
import "flag-icon-css/css/flag-icon.min.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { GrLanguage } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
const I18n = () => {
  const language = [
    {
      code: "us",
      name: "English",
      country_code: "us",
    },
    {
      code: "uz",
      name: "Uzbek",
      country_code: "uz",
    },
  ];

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      debug: true,
      supportedLngs: ["en", "uz"],
      fallbackLng: "en",
      detection: {
        order: ["htmlTag", "localStorage", "cookie", "path", "subdomain"],
        caches: ["cookie", "localStorage"],
      },
      backend: {
        loadPath: "/assets/locales/{{lng}}/translation.json",
      },
      react: { useSuspense: false },
    });
  return (
    <div>
      <div className="language__switcher">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="/assets/language.png" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {language.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <b
                className="dropdown-item"
                onClick={() => i18n.changeLanguage(code)}
              >
                <span className={`flag-icon flag-icon-${code}`}></span> {name}
              </b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default I18n;
