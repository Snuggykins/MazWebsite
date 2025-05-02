"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

// Type definition for the site mode
export type Mode = "cars" | "decor";

// Type for the context value
export type ModeContextType = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

// Create the context with a default value
export const ModeContext = createContext<ModeContextType | undefined>(undefined);

// Provider component props
interface ModeProviderProps {
  children: ReactNode;
}

// Provider component to wrap around components that need access to the mode
const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
  // Initialize state with a function to avoid running localStorage on server
  const [mode, setModeState] = useState<Mode>(() => {
    // This will only run on client-side
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("mode") as Mode;
      return storedMode === "cars" || storedMode === "decor" ? storedMode : "cars";
    }
    return "cars";
  });

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  // Handler to update mode
  const setMode = (newMode: Mode) => {
    setModeState(newMode);
  };

  // Context value
  const value = { mode, setMode };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

// Export the provider
export { ModeProvider };
