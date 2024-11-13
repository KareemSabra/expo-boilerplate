import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Import translations from JSON files
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export function useI18n() {
  // Set the key-value pairs for the different languages you want to support.
  const i18n = new I18n({
    en,
    ar,
  });

  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  return {
    t: (key: string) => i18n.t(key),
    isRTL: getLocales()[0].textDirection === "rtl",
  };
}
