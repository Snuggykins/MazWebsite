"use client";

import { useState } from "react";
import { useMode } from "@/hooks/useMode";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  id: string;
  title: string;
  description: string;
}

export const FeaturedWork = () => {
  const { mode } = useMode();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Sample work items - would come from a CMS or API in a real app
  const workItems: WorkItem[] = mode === "cars" 
    ? [
        { id: "c1", title: "Vintage Restoration", description: "Classic car brought back to life with modern touches" },
        { id: "c2", title: "Performance Upgrade", description: "Enhanced power and handling for track enthusiasts" },
        { id: "c3", title: "Custom Bodywork", description: "One-of-a-kind exterior styling and aerodynamics" },
      ]
    : [
        { id: "d1", title: "Statement Lighting", description: "Bold fixtures that transform any space" },
        { id: "d2", title: "Metal Sculptures", description: "Industrial-inspired art with character" },
        { id: "d3", title: "Custom Furniture", description: "Functional pieces designed for your space" },
      ];
      
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const buttonColorClass = mode === "cars" 
    ? "bg-cars hover:bg-cars-dark text-white"
    : "bg-decor hover:bg-decor-dark text-white";
  
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          
          <motion.p 
            className="text-lg text-copy/80 max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {mode === "cars" 
              ? "Our passion projects showcase the blend of technical excellence and creative vision."
              : "Each piece tells a story and brings character to living and working spaces."}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-[4/5] bg-line/30 cursor-pointer overflow-hidden group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={mode === "cars" 
                  ? "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress" 
                  : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress"
                }
                alt={mode === "cars" ? "Custom car" : "Interior decor"}
                fill
                sizes="100vw"
                priority
                className="object-cover opacity-20"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-copy/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                
                <motion.div
                  initial={{ height: "0" }}
                  animate={{ 
                    height: hoveredItem === item.id ? "auto" : "0",
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-white/80 mb-4">{item.description}</p>
                  
                  <span 
                    className={`inline-block ${accentColorClass} font-medium flex items-center`}
                    aria-label={`View details for ${item.title}`}
                  >
                    View details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <Link 
          href="/gallery" 
          className={`inline-block px-6 py-3 mt-8 rounded-sm ${buttonColorClass} transition-colors duration-300 font-medium`}
        >
          View All Work
        </Link>
      </div>
    </section>
  );
};
