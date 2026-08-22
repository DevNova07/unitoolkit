"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  LocaleCode,
  LocaleConfig,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_TRANSLATIONS,
} from "@/lib/i18n";

interface LocaleContextType {
  locale: LocaleCode;
  config: LocaleConfig;
  setLocale: (newLocale: LocaleCode) => void;
  t: (key: string) => string;
  isRtl: boolean;
  hasShayari: boolean;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  config: SUPPORTED_LOCALES[DEFAULT_LOCALE],
  setLocale: () => {},
  t: (key) => key,
  isRtl: false,
  hasShayari: false,
});

export const LOCALE_STORAGE_KEY = "unitoolkit_user_locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const applyLocaleToHtml = (loc: LocaleCode) => {
    const config = SUPPORTED_LOCALES[loc] || SUPPORTED_LOCALES.en;
    if (typeof document !== "undefined") {
      document.documentElement.lang = loc;
      document.documentElement.dir = config.dir;
    }
  };

  const [locale, setLocaleState] = useState<LocaleCode>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as LocaleCode;
        if (saved && SUPPORTED_LOCALES[saved]) {
          return saved;
        }
      } catch {
        // Ignore storage errors
      }
    }
    return DEFAULT_LOCALE;
  });

  useEffect(() => {
    applyLocaleToHtml(locale);
  }, [locale]);

  const setLocale = (newLocale: LocaleCode) => {
    if (SUPPORTED_LOCALES[newLocale]) {
      setLocaleState(newLocale);
      applyLocaleToHtml(newLocale);
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      } catch (e) {
        console.warn("Could not save locale preference:", e);
      }
    }
  };

  const config = SUPPORTED_LOCALES[locale] || SUPPORTED_LOCALES.en;
  const isRtl = config.dir === "rtl";
  const hasShayari = config.hasShayariPillar;

  const t = (key: string): string => {
    const table = LOCALE_TRANSLATIONS[locale] || LOCALE_TRANSLATIONS.en;
    return table[key] || LOCALE_TRANSLATIONS.en[key] || key;
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        config,
        setLocale,
        t,
        isRtl,
        hasShayari,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
