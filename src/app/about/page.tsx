"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { useLanguage } from "@/hooks/useLanguage";

export default function About() {
  const { mode } = useMode();
  const { language } = useLanguage();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  // Translations
  const texts = {
    en: {
      about: "About Us",
      founded: `Founded in 2010, MAZ ${mode === "cars" ? "CUSTOMS" : "DECOR"} is driven by a singular passion: the pursuit of aesthetic and functional excellence in ${mode === "cars" ? "automotive customization" : "interior design"}.`,
      team: "Our dedicated team of specialists combines decades of experience with a relentless commitment to craftsmanship and innovation.",
      ourTeam: "Our Team",
      masterMechanic: "Master Mechanic",
      principalDesigner: "Principal Designer",
      leadTechnician: "Lead Technician",
      seniorDesigner: "Senior Designer",
      marianExperience: "With over 15 years of experience, Marian brings unparalleled expertise and vision to every project.",
      denisaDetail: "Denisa's attention to detail and creative approach ensures every project is executed flawlessly.",
      ourValues: "Our Values",
      precision: "Precision",
      precisionText: "We believe that excellence lives in the details.",
      innovation: "Innovation",
      innovationText: "We constantly push boundaries to create unique solutions.",
      integrity: "Integrity",
      integrityText: "We stand behind our work with pride and accountability."
    },
    ro: {
      about: "Despre Noi",
      founded: `Înființat în 2010, MAZ ${mode === "cars" ? "CUSTOMS" : "DECOR"} este condus de o pasiune singulară: urmărirea excelenței estetice și funcționale în ${mode === "cars" ? "personalizarea automobilelor" : "designul interior"}.`,
      team: "Echipa noastră dedicată de specialiști combină decenii de experiență cu un angajament neîncetat pentru măiestrie și inovație.",
      ourTeam: "Echipa Noastră",
      masterMechanic: "Maestru Mecanic",
      principalDesigner: "Designer Principal",
      leadTechnician: "Tehnician Șef",
      seniorDesigner: "Designer Senior",
      marianExperience: "Cu peste 15 ani de experiență, Marian aduce o expertiză și o viziune de neegalat fiecărui proiect.",
      denisaDetail: "Atenția la detalii și abordarea creativă a Denisei asigură că fiecare proiect este executat impecabil.",
      ourValues: "Valorile Noastre",
      precision: "Precizie",
      precisionText: "Credem că excelența trăiește în detalii.",
      innovation: "Inovație",
      innovationText: "Împingem constant limitele pentru a crea soluții unice.",
      integrity: "Integritate",
      integrityText: "Susținem munca noastră cu mândrie și responsabilitate."
    }
  };
  
  const t = texts[language];
  
  return (
    <>
      {/* Hero section with plenty of breathing room */}
      <section className="w-full py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-heading font-bold mb-12 text-white">
              {t.about.split(' ')[0]} <span className={accentColorClass}>{t.about.split(' ')[1]}</span>
            </h1>
            
            <div className="prose prose-lg text-white/90 max-w-none">
              <p className="text-xl font-body leading-relaxed mb-8">
                {t.founded}
              </p>
              
              <p className="text-xl font-body leading-relaxed mb-8">
                {t.team}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-heading font-bold mb-16 text-center text-white">
              {t.ourTeam.split(' ')[0]} <span className={accentColorClass}>{t.ourTeam.split(' ')[1]}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-card/5 p-8 rounded-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  Pop Marian
                </h3>
                <p className={`${accentColorClass} text-sm uppercase tracking-wider mb-4`}>
                  {mode === "cars" ? t.masterMechanic : t.principalDesigner}
                </p>
                <p className="text-white/80 mb-6">
                  {t.marianExperience}
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-card/5 p-8 rounded-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">
                  Pop Denisa
                </h3>
                <p className={`${accentColorClass} text-sm uppercase tracking-wider mb-4`}>
                  {mode === "cars" ? t.leadTechnician : t.seniorDesigner}
                </p>
                <p className="text-white/80 mb-6">
                  {t.denisaDetail}
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
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-heading font-bold mb-16 text-white">
              {t.ourValues.split(' ')[0]} <span className={accentColorClass}>{t.ourValues.split(' ')[1]}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">01</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t.precision}</h3>
                <p className="text-white/80">
                  {t.precisionText}
                </p>
              </div>
              
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">02</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t.innovation}</h3>
                <p className="text-white/80">
                  {t.innovationText}
                </p>
              </div>
              
              <div>
                <div className={`w-16 h-16 ${accentBgClass} rounded-sm flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-2xl font-heading">03</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white">{t.integrity}</h3>
                <p className="text-white/80">
                  {t.integrityText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
