"use client";

import { useState, useEffect } from "react";
import { useMode } from "@/hooks/useMode";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  const { mode } = useMode();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const buttonColorClass = mode === "cars" ? "bg-cars" : "bg-decor";

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Dynamic background image based on mode */}
      <div className="absolute inset-0">
        <Image
          src={mode === "cars" 
            ? "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress" 
            : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress"
          }
          alt={mode === "cars" ? "Custom car" : "Interior decor"}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-40"
        />
      </div>
      
      {/* Text overlay with sparse typography */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            {mode === "cars" 
              ? "Automotive Excellence" 
              : "Interior Design Mastery"}
          </h1>
          
          <p className="text-lg md:text-xl font-body mb-8 text-white/90 drop-shadow-md max-w-xl">
            {mode === "cars"
              ? "Custom automotive solutions that blend performance and aesthetics for the discerning enthusiast."
              : "Thoughtfully crafted interior accents that transform spaces into distinctive environments."
            }
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={mode === "cars" ? "/services#automotive" : "/services#decor"}
              className={`${buttonColorClass} px-8 py-3 text-white font-body font-medium rounded-sm transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label={mode === "cars" ? "Explore our automotive services" : "Explore our decor services"}
            >
              Explore Services
            </motion.a>
            
            <motion.a
              href="/gallery"
              className="bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 text-white font-body font-medium rounded-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View our portfolio gallery"
            >
              View Gallery
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
