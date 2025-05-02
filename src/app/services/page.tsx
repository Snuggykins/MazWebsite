"use client";

import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";

export default function Services() {
  const { mode } = useMode();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  // Service content that changes based on mode
  const services = mode === "cars" 
    ? [
        {
          id: "performance",
          title: "Performance Upgrades",
          description: "Enhance your vehicle's power, handling, and efficiency with our custom performance solutions.",
          icon: "🏎️",
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
      ];

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
              <span className={accentColorClass}>Services</span>
            </h1>
            
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              {mode === "cars" 
                ? "We offer comprehensive automotive customization services, from performance enhancements to complete aesthetic transformations." 
                : "We provide bespoke interior design solutions that transform spaces into unique expressions of your personal style."}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services grid with purposeful motion */}
      <section id={mode === "cars" ? "automotive" : "decor"} className="w-full py-24 bg-line/5">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
              Our <span className={accentColorClass}>Process</span>
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
                <h3 className="text-2xl font-heading font-semibold ml-8 mb-4 pt-1 text-white">Consultation</h3>
                <p className="text-white/80 leading-relaxed">
                  We begin with an in-depth consultation to understand your vision, requirements, and preferences.
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
                <h3 className="text-2xl font-heading font-semibold mb-4 pt-1 text-white">Design & Planning</h3>
                <p className="text-white/80 leading-relaxed">
                  Our team creates detailed designs and plans, incorporating your feedback until the concept is perfect.
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
                <h3 className="text-2xl font-heading font-semibold ml-8 mb-4 pt-1 text-white">Execution</h3>
                <p className="text-white/80 leading-relaxed">
                  Our craftsmen meticulously bring the design to life, with regular updates throughout the process.
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
                <h3 className="text-2xl font-heading font-semibold mb-4 pt-1 text-white">Delivery</h3>
                <p className="text-white/80 leading-relaxed">
                  The final product is delivered with a comprehensive walkthrough and aftercare guidance.
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
              Ready to start your {mode === "cars" ? "custom build" : "design project"}?
            </h2>
            <p className="text-lg font-body text-white/80 mb-12 max-w-2xl mx-auto">
              Contact us today to discuss your vision and how we can bring it to life.
            </p>
            <motion.a
              href="/contact"
              className={`inline-block px-8 py-3 ${accentBgClass} text-white font-medium rounded-sm transition-all duration-300 hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
