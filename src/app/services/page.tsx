"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { useLanguage } from "@/hooks/useLanguage";

export default function Services() {
  const { mode } = useMode();
  const { language } = useLanguage();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  // Translations for static text
  const texts = {
    en: {
      services: "Services",
      carsDescription: "We offer comprehensive automotive customization services, from performance enhancements to complete aesthetic transformations.",
      decorDescription: "We provide bespoke interior design solutions that transform spaces into unique expressions of your personal style.",
      ourProcess: "Our Process",
      consultation: "Consultation",
      consultationText: "We begin with an in-depth consultation to understand your vision, requirements, and preferences.",
      designPlanning: "Design & Planning",
      designPlanningText: "Our team creates detailed designs and plans, incorporating your feedback until the concept is perfect.",
      execution: "Execution",
      executionText: "Our craftsmen meticulously bring the design to life, with regular updates throughout the process.",
      delivery: "Delivery",
      deliveryText: "The final product is delivered with a comprehensive walkthrough and aftercare guidance.",
      readyToStart: "Ready to start your",
      customBuild: "custom build",
      designProject: "design project",
      getInTouch: "Get in Touch"
    },
    ro: {
      services: "Servicii",
      carsDescription: "Oferim servicii complete de personalizare auto, de la îmbunătățiri de performanță până la transformări estetice complete.",
      decorDescription: "Oferim soluții de design interior personalizate care transformă spațiile în expresii unice ale stilului dumneavoastră personal.",
      ourProcess: "Procesul Nostru",
      consultation: "Consultare",
      consultationText: "Începem cu o consultare detaliată pentru a înțelege viziunea, cerințele și preferințele dumneavoastră.",
      designPlanning: "Design & Planificare",
      designPlanningText: "Echipa noastră creează proiecte și planuri detaliate, incorporând feedback-ul dumneavoastră până când conceptul este perfect.",
      execution: "Execuție",
      executionText: "Meșterii noștri aduc design-ul la viață cu meticulozitate, cu actualizări regulate pe parcursul procesului.",
      delivery: "Livrare",
      deliveryText: "Produsul final este livrat cu o prezentare completă și îndrumări pentru întreținere ulterioară.",
      readyToStart: "Sunteți gata să începeți",
      customBuild: "proiectul de construire personalizat",
      designProject: "proiectul de design",
      getInTouch: "Contactați-ne"
    }
  };
  
  // Service content that changes based on mode and language
  const getServices = () => {
    if (mode === "cars") {
      return language === "en" 
        ? [
            {
              id: "vehicle-repair",
              title: "Vehicle Repair",
              description: "Restore your vehicle to optimal condition with our expert repair services, covering everything from engines to electrical systems.",
              icon: "🛠️",
            },
            {
              id: "bodywork",
              title: "Custom Bodywork",
              description: "Transform your vehicle's appearance with our bespoke body modifications and finishes.",
              icon: "🔧",
            },
            {
              id: "interior",
              title: "Interior Customization",
              description: "Elevate your driving experience with premium interior upgrades and personalization.",
              icon: "💺",
            },
            {
              id: "restoration",
              title: "Classic Restoration",
              description: "Bring timeless vehicles back to their former glory with our meticulous restoration services.",
              icon: "🔄",
            },
          ]
        : [
            {
              id: "vehicle-repair",
              title: "Reparații Auto",
              description: "Restabiliți vehiculul dumneavoastră la condiția optimă cu serviciile noastre de reparații, acoperind totul de la motoare la sisteme electrice.",
              icon: "🛠️",
            },
            {
              id: "bodywork",
              title: "Caroserie Personalizată",
              description: "Transformați aspectul vehiculului dumneavoastră cu modificările și finisajele noastre personalizate pentru caroserie.",
              icon: "🔧",
            },
            {
              id: "interior",
              title: "Personalizare Interior",
              description: "Îmbunătățiți experiența de condus cu upgrade-uri și personalizări premium pentru interior.",
              icon: "💺",
            },
            {
              id: "restoration",
              title: "Restaurare Clasică",
              description: "Readuceți vehiculele clasice la gloria lor de altădată cu serviciile noastre meticuloase de restaurare.",
              icon: "🔄",
            },
          ];
    } else {
      return language === "en"
        ? [
            {
              id: "furniture",
              title: "Custom Furniture",
              description: "Distinctive pieces crafted to your exact specifications and aesthetic preferences.",
              icon: "🪑",
            },
            {
              id: "lighting",
              title: "Lighting Solutions",
              description: "Illuminate your space with our custom-designed lighting fixtures and installations.",
              icon: "💡",
            },
            {
              id: "wall",
              title: "Wall Treatments",
              description: "Transform your walls with our custom finishes, paneling, and artistic installations.",
              icon: "🧱",
            },
            {
              id: "accessories",
              title: "Bespoke Accessories",
              description: "Complete your space with distinctive decorative elements and functional art pieces.",
              icon: "🎭",
            },
          ]
        : [
            {
              id: "furniture",
              title: "Mobilier Personalizat",
              description: "Piese distinctive create conform specificațiilor și preferințelor dumneavoastră estetice exacte.",
              icon: "🪑",
            },
            {
              id: "lighting",
              title: "Soluții de Iluminat",
              description: "Iluminați-vă spațiul cu corpurile și instalațiile noastre de iluminat personalizate.",
              icon: "💡",
            },
            {
              id: "wall",
              title: "Tratamente pentru Pereți",
              description: "Transformați-vă pereții cu finisajele, panourile și instalațiile noastre artistice personalizate.",
              icon: "🧱",
            },
            {
              id: "accessories",
              title: "Accesorii Personalizate",
              description: "Completați-vă spațiul cu elemente decorative distinctive și piese de artă funcționale.",
              icon: "🎭",
            },
          ];
    }
  };

  const services = getServices();
  const t = texts[language];

  return (
    <>
      {/* Hero section with generous whitespace */}
      <section className="w-full py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl font-heading font-bold mb-8 text-white">
              <span className={accentColorClass}>{t.services}</span>
            </h1>
            
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              {mode === "cars" ? t.carsDescription : t.decorDescription}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services grid with purposeful motion */}
      <section id={mode === "cars" ? "automotive" : "decor"} className="w-full py-24 bg-line/5">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-card/5 p-10 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${accentBgClass} rounded-sm flex items-center justify-center mb-6`}>
                  <span role="img" aria-label={service.title} className="text-xl">
                    {service.icon}
                  </span>
                </div>
                
                <h2 id={service.id} className="text-2xl font-heading font-semibold mb-4 text-white">
                  {service.title}
                </h2>
                
                <p className="text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process section with spatial typography */}
      <section className="w-full py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-heading font-bold mb-8 text-white">
              {t.ourProcess.split(' ')[0]} <span className={accentColorClass}>{t.ourProcess.split(' ')[1]}</span>
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Process steps with connecting line */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${accentBgClass} opacity-30`}></div>
            
            {/* Step 1 */}
            <motion.div 
              className="relative mb-32 md:max-w-lg md:ml-auto md:mr-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            >
              <div className={`absolute left-4 md:left-auto md:right-full md:translate-x-1/2 top-0 w-10 h-10 ${accentBgClass} rounded-full flex items-center justify-center -translate-x-1/2`}>
                <span className="text-white font-heading font-bold">1</span>
              </div>
              <div className="pl-12 md:pl-0">
                <h3 className="text-2xl font-heading font-semibold ml-8 mb-4 pt-1 text-white">{t.consultation}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t.consultationText}
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="relative mb-32 md:max-w-lg md:mr-auto md:ml-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            >
              <div className="pl-12 md:pl-0">
                <h3 className="text-2xl font-heading font-semibold mb-4 pt-1 text-white">{t.designPlanning}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t.designPlanningText}
                </p>
              </div>
              <div className={`absolute right-4 md:left-full md:-translate-x-1/2 top-0 w-10 h-10 ${accentBgClass} rounded-full flex items-center justify-center -translate-x-1/2`}>
                <span className="text-white font-heading font-bold">2</span>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="relative mb-32 md:max-w-lg md:ml-auto md:mr-16"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            >
              <div className={`absolute left-4 md:left-auto md:right-full md:translate-x-1/2 top-0 w-10 h-10 ${accentBgClass} rounded-full flex items-center justify-center -translate-x-1/2`}>
                <span className="text-white font-heading font-bold">3</span>
              </div>
              <div className="pl-12 md:pl-0">
                <h3 className="text-2xl font-heading font-semibold ml-8 mb-4 pt-1 text-white">{t.execution}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t.executionText}
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="relative md:max-w-lg md:mr-auto md:ml-16"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px", amount: 0.1 }}
            >
              <div className="pl-12 md:pl-0">
                <h3 className="text-2xl font-heading font-semibold mb-4 pt-1 text-white">{t.delivery}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t.deliveryText}
                </p>
              </div>
              <div className={`absolute right-4 md:left-full md:-translate-x-1/2 top-0 w-10 h-10 ${accentBgClass} rounded-full flex items-center justify-center -translate-x-1/2`}>
                <span className="text-white font-heading font-bold">4</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="w-full py-24 bg-line/5">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">
              {t.readyToStart} {mode === "cars" ? t.customBuild : t.designProject}?
            </h2>
            <p className="text-lg font-body text-white/80 mb-12 max-w-2xl mx-auto">
              {t.getInTouch}
            </p>
            <motion.a
              href="/contact"
              className={`inline-block px-8 py-3 ${accentBgClass} text-white font-medium rounded-sm transition-all duration-300 hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.getInTouch}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
