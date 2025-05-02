"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";

export default function Home() {
  const { mode } = useMode();
  // Use the CSS classes we defined in globals.css
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  const accentBorderClass = `border-${mode === "cars" ? "cars" : "decor"}`;
  
  return (
    <>
      <HeroSection />
      
      {/* Content section with plenty of breathing room */}
      <section className="w-full py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16">
              Our <span className={accentColorClass}>approach</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-lg font-body text-copy/80 leading-relaxed">
                We believe in meticulous attention to detail, a perfect marriage of form and function.
                Every project starts with a <span className={accentColorClass}>vision</span> and ends with exceptional execution.
              </p>
              <p className="text-lg font-body text-copy/80 leading-relaxed">
                Whether it&apos;s automotive customization or distinctive decor pieces, our process emphasizes 
                quality materials, innovative techniques, and <span className={accentColorClass}>timeless design</span> principles.
              </p>
            </div>
          </motion.div>
          
          <div className={`w-full h-[60vh] bg-line/20 mb-32 relative overflow-hidden border-l-4 ${accentBorderClass}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-heading font-bold text-copy/10">
                PHILOSOPHY
              </span>
              <span className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 ${accentBgClass}`}></span>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedWork />
      
      {/* Call to action section */}
      <section className="w-full py-32 bg-line/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Ready to start your project?</h2>
            <p className="text-lg font-body text-copy/80 mb-12 max-w-2xl mx-auto">
              We&apos;d love to hear about your vision and how we can bring it to life. Reach out to discuss your next custom project.
            </p>
            <motion.a
              href="/contact"
              className={`inline-block px-8 py-3 ${accentBgClass} text-white font-medium rounded-sm transition-all duration-300 hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <section className="w-full py-32 bg-line/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-white font-heading font-semibold mb-2">Client-Focused Approach</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Every project begins with understanding your vision. We&apos;re not satisfied
              until you are.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Whether you&apos;re looking for a custom build or subtle enhancements, our expertise will exceed your expectations.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
