import { createContext, useContext, useState } from "react";
import { content, type Locale } from "@/data/content";

type ContentType = (typeof content)[Locale];

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ContentType;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: content[locale] as ContentType }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
