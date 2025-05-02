"use client";

import { useRef, useEffect, useState } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import * as THREE from "three";
import { useMode } from "@/hooks/useMode";

// Note: TOPOLOGY effect requires P5.js
// This is imported in the _document.js file or needs to be added

type VantaProps = {
  children: React.ReactNode;
  className?: string;
};

export const VantaBackground: React.FC<VantaProps> = ({ 
  children, 
  className = "" 
}) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  useEffect(() => {
    // Cleanup previous effect if it exists
    if (vantaEffect) {
      vantaEffect.destroy();
    }

    // Only create effect if ref is available
    if (vantaRef.current) {
      const effect = TOPOLOGY({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: mode === "cars" ? 0x2563EB : 0xD4AF37,
        backgroundColor: mode === "cars" ? 0x1F1F1F : 0x1F1F1F
      });
      
      setVantaEffect(effect);
    }

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [mode]); // Re-run when mode changes to update the effect

  return (
    <div 
      ref={vantaRef} 
      className={`fixed inset-0 -z-10 ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};
