"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";

export type Language = "en" | "ro";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "ro",
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get URL params for initial language
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as Language;
  
  // Initialize language from URL or localStorage, defaulting to "ro"
  const [language, setLanguage] = useState<Language>("ro");
  
  // Sync with localStorage and URL on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    
    // Priority: URL parameter > localStorage > default "ro"
    if (urlLang && (urlLang === "en" || urlLang === "ro")) {
      setLanguage(urlLang);
      localStorage.setItem("language", urlLang);
    } else if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ro")) {
      setLanguage(savedLanguage);
    }
  }, [urlLang]);
  
  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
