"use client";

import { useContext } from "react";
import { ModeContext, type ModeContextType } from "@/context/ModeContext";

export const useMode = (): ModeContextType => {
  const context = useContext(ModeContext);
  
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  
  return context;
};
