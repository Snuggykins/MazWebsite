"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";

export default function About() {
  const { mode } = useMode();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  return (
    <>
      {/* Hero section with plenty of breathing room */}
      <section className="w-full py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-heading font-bold mb-12 text-white">
              About <span className={accentColorClass}>Us</span>
            </h1>
            
            <div className="prose prose-lg text-white/90 max-w-none">
              <p className="text-xl font-body leading-relaxed mb-8">
                Founded in 2010, MAZ {mode === "cars" ? "CUSTOMS" : "DECOR"} is driven by a singular passion: 
                the pursuit of aesthetic and functional excellence in {mode === "cars" ? "automotive customization" : "interior design"}.
              </p>
              
              <p className="text-xl font-body leading-relaxed mb-8">
                Our dedicated team of specialists combines decades of experience with 
                a relentless commitment to craftsmanship and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team section with purposeful motion */}
      <section className="w-full py-24 bg-line/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-16 text-center text-white">
              Our <span className={accentColorClass}>Team</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-card/5 p-8 rounded-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  Michael Anderson
                </h3>
                <p className={`${accentColorClass} text-sm uppercase tracking-wider mb-4`}>
                  {mode === "cars" ? "Master Mechanic" : "Principal Designer"}
                </p>
                <p className="text-white/80 mb-6">
                  With over 15 years of experience, Michael brings unparalleled expertise 
                  and vision to every project.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-card/5 p-8 rounded-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  Zoe Thompson
                </h3>
                <p className={`${accentColorClass} text-sm uppercase tracking-wider mb-4`}>
                  {mode === "cars" ? "Lead Technician" : "Senior Designer"}
                </p>
                <p className="text-white/80 mb-6">
                  Zoe&apos;s attention to detail and creative approach ensures every project 
                  is executed flawlessly.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values section with sparse typography */}
      <section className="w-full py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-16 text-white">
              Our <span className={accentColorClass}>Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">01</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">Precision</h3>
                <p className="text-white/80">
                  We believe that excellence lives in the details.
                </p>
              </div>
              
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">02</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">Innovation</h3>
                <p className="text-white/80">
                  We constantly push boundaries to create unique solutions.
                </p>
              </div>
              
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">03</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">Integrity</h3>
                <p className="text-white/80">
                  We stand behind our work with pride and accountability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
