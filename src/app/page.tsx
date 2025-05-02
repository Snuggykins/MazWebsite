"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { useLanguage } from "@/hooks/useLanguage";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedWork } from "@/components/FeaturedWork";

export default function Home() {
  const { mode } = useMode();
  const { language } = useLanguage();
  
  // Use the CSS classes we defined in globals.css
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  const accentBorderClass = `border-${mode === "cars" ? "cars" : "decor"}`;
  
  // Translations
  const texts = {
    en: {
      approach: "Our approach",
      detail: "We believe in meticulous attention to detail, a perfect marriage of form and function. Every project starts with a vision and ends with exceptional execution.",
      materials: "Whether it's automotive customization or distinctive decor pieces, our process emphasizes quality materials, innovative techniques, and timeless design principles.",
      philosophy: "PHILOSOPHY",
      readyToStart: "Ready to start your project?",
      visionText: "We'd love to hear about your vision and how we can bring it to life. Reach out to discuss your next custom project.",
      contactUs: "Contact Us",
      clientFocused: "Client-Focused Approach",
      clientFocusedText1: "Every project begins with understanding your vision. We're not satisfied until you are.",
      clientFocusedText2: "Whether you're looking for a custom build or subtle enhancements, our expertise will exceed your expectations."
    },
    ro: {
      approach: "Abordarea noastră",
      detail: "Credem în atenția meticuloasă la detalii, o îmbinare perfectă a formei și funcției. Fiecare proiect începe cu o viziune și se termină cu o execuție excepțională.",
      materials: "Fie că este vorba de personalizarea automobilelor sau de piese de decor distinctive, procesul nostru pune accent pe materiale de calitate, tehnici inovatoare și principii de design durabile.",
      philosophy: "FILOZOFIE",
      readyToStart: "Pregătit să începi proiectul tău?",
      visionText: "Ne-ar plăcea să auzim despre viziunea ta și cum o putem aduce la viață. Contactează-ne pentru a discuta despre următorul tău proiect personalizat.",
      contactUs: "Contactează-ne",
      clientFocused: "Abordare centrată pe client",
      clientFocusedText1: "Fiecare proiect începe cu înțelegerea viziunii tale. Nu suntem mulțumiți până când nu ești și tu.",
      clientFocusedText2: "Fie că cauți o construcție personalizată sau îmbunătățiri subtile, expertiza noastră va depăși așteptările tale."
    }
  };
  
  const t = texts[language];
  
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
              {t.approach.split(' ')[0]} <span className={accentColorClass}>{t.approach.split(' ')[1]}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-lg font-body text-copy/80 leading-relaxed">
                {t.detail.replace('vision', `<span class="${accentColorClass}">vision</span>`)}
              </p>
              <p className="text-lg font-body text-copy/80 leading-relaxed">
                {t.materials.replace('timeless design', `<span class="${accentColorClass}">timeless design</span>`)}
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">{t.readyToStart}</h2>
            <p className="text-lg font-body text-copy/80 mb-12 max-w-2xl mx-auto">
              {t.visionText}
            </p>
            <motion.a
              href="/contact"
              className={`inline-block px-8 py-3 ${accentBgClass} text-white font-medium rounded-sm transition-all duration-300 hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contactUs}
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
            <h3 className="text-2xl text-white font-heading font-semibold mb-2">{t.clientFocused}</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t.clientFocusedText1}
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              {t.clientFocusedText2}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
