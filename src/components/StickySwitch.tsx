"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMode } from "@/hooks/useMode";
import type { Mode } from "@/context/ModeContext";

type SwitchProps = {
  className?: string;
};

export const StickySwitch: React.FC<SwitchProps> = ({ className = "" }) => {
  const { mode, setMode } = useMode();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMode = () => {
    const newMode: Mode = mode === "cars" ? "decor" : "cars";
    setMode(newMode);
    
    // Update URL query parameter without full refresh
    router.replace(`?m=${newMode}`, { scroll: false });
  };

  if (!mounted) return null;

  // Dynamic styling based on the current mode
  const activeStyles = mode === "cars" 
    ? "bg-cars text-white" 
    : "bg-decor text-white";
  
  const inactiveStyles = "text-white hover:text-opacity-75 transition-colors";

  return (
    <div className={className}>
      <label className="inline-flex items-center cursor-pointer rounded-full border border-line bg-black/30 backdrop-blur-sm px-1 py-1 shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Visually hidden checkbox */}
        <input
          type="checkbox"
          className="sr-only"
          checked={mode === "decor"}
          onChange={toggleMode}
          aria-label={`Switch to ${mode === "cars" ? "decor" : "cars"} mode`}
        />
        
        {/* Custom/Cars label */}
        <span 
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            mode === "cars" ? activeStyles : inactiveStyles
          }`}
        >
          Customs
        </span>
        
        {/* Decor label */}
        <span 
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            mode === "decor" ? activeStyles : inactiveStyles
          }`}
        >
          Decor
        </span>
      </label>
    </div>
  );
};
