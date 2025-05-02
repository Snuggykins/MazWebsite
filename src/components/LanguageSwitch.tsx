"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/context/LanguageContext";

type LanguageSwitchProps = {
  className?: string;
};

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "ro" : "en";
    setLanguage(newLanguage);
    
    // Update URL query parameter without full refresh
    router.replace(`?lang=${newLanguage}`, { scroll: false });
  };

  if (!mounted) return null;

  // Dynamic styling based on the current language
  const activeStyles = "bg-copy text-white";
  const inactiveStyles = "text-white hover:text-opacity-75 transition-colors";

  return (
    <div className={className}>
      <label className="inline-flex items-center cursor-pointer rounded-full border border-line bg-black/30 backdrop-blur-sm px-1 py-1 shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Visually hidden checkbox */}
        <input
          type="checkbox"
          className="sr-only"
          checked={language === "ro"}
          onChange={toggleLanguage}
          aria-label={`Switch to ${language === "en" ? "Romanian" : "English"} language`}
        />
        
        {/* English label */}
        <span 
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            language === "en" ? activeStyles : inactiveStyles
          }`}
        >
          {language === "en" ? "RO" : "EN"}
        </span>
      </label>
    </div>
  );
};
