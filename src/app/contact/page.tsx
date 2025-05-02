"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { useLanguage } from "@/hooks/useLanguage";

export default function Contact() {
  const { mode } = useMode();
  const { language } = useLanguage();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  // Translations
  const texts = {
    en: {
      contact: "Contact Us",
      carsMessage: "Ready to start your custom automotive project? Get in touch with our team of specialists.",
      decorMessage: "Have a space you'd like to transform? Reach out to discuss your interior design vision.",
      sendMessage: "Message Us",
      thankYou: "Thank you!",
      confirmation: "Your message has been received. We'll get back to you shortly.",
      name: "Name",
      email: "Email",
      message: "Message",
      sendButton: "Send Message",
      information: "Contact Information",
      location: "Location",
      address1: "123 Design Avenue",
      address2: "Suite 456",
      address3: "New York, NY 10001",
      contactHeading: "Contact",
      phone: "Phone: (212) 555-1234",
      emailLabel: `Email: info@maz${mode === "cars" ? "customs" : "decor"}.com`,
      hours: "Hours",
      monFri: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
      available: "Our team is available to discuss your project, answer questions, or schedule a consultation. We'll respond within 24 hours."
    },
    ro: {
      contact: "Contactați-ne",
      carsMessage: "Sunteți gata să începeți proiectul dumneavoastră auto personalizat? Luați legătura cu echipa noastră de specialiști.",
      decorMessage: "Aveți un spațiu pe care doriți să-l transformați? Contactați-ne pentru a discuta despre viziunea dumneavoastră de design interior.",
      sendMessage: "Trimiteți-ne Mesaj",
      thankYou: "Vă mulțumim!",
      confirmation: "Mesajul dumneavoastră a fost primit. Vă vom contacta în curând.",
      name: "Nume",
      email: "Email",
      message: "Mesaj",
      sendButton: "Trimite Mesajul",
      information: "Informații Contact",
      location: "Locație",
      address1: "Strada Design 123",
      address2: "Suita 456",
      address3: "New York, NY 10001",
      contactHeading: "Contact",
      phone: "Telefon: (212) 555-1234",
      emailLabel: `Email: info@maz${mode === "cars" ? "customs" : "decor"}.com`,
      hours: "Program",
      monFri: "Luni - Vineri: 9:00 - 18:00",
      saturday: "Sâmbătă: 10:00 - 16:00",
      sunday: "Duminică: Închis",
      available: "Echipa noastră este disponibilă pentru a discuta despre proiectul dumneavoastră, a răspunde la întrebări sau a programa o consultație. Vom răspunde în termen de 24 de ore."
    }
  };
  
  const t = texts[language];
  
  // Form placeholder (not functional yet)
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual form submission logic
    setFormSubmitted(true);
    // Reset the form after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

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
              {t.contact.split(' ')[0]} <span className={accentColorClass}>{t.contact.split(' ')[1]}</span>
            </h1>
            
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              {mode === "cars" ? t.carsMessage : t.decorMessage}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact section with form and info */}
      <section className="w-full pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading font-semibold mb-8 text-white">
                {t.sendMessage.split(' ')[0]} <span className={accentColorClass}>{t.sendMessage.split(' ')[1]}</span>
              </h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card/5 p-8 rounded-sm text-center"
                >
                  <p className="text-white text-xl mb-4">{t.thankYou}</p>
                  <p className="text-white/80">
                    {t.confirmation}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-card/5 border border-line/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-opacity-50 focus:border-cars"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-card/5 border border-line/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-opacity-50 focus:border-cars"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-card/5 border border-line/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-opacity-50 focus:border-cars"
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`${accentBgClass} px-8 py-3 text-white font-medium rounded-sm transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.sendButton}
                  </motion.button>
                </form>
              )}
            </motion.div>
            
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-heading font-semibold mb-8 text-white">
                {t.information.split(' ')[0]} <span className={accentColorClass}>{t.information.split(' ')[1]}</span>
              </h2>
              
              <div className="bg-card/5 p-8 rounded-sm space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">{t.location}</h3>
                  <p className="text-white/80">
                    {t.address1}<br />
                    {t.address2}<br />
                    {t.address3}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">{t.contactHeading}</h3>
                  <p className="text-white/80">
                    {t.phone}<br />
                    {t.emailLabel}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">{t.hours}</h3>
                  <p className="text-white/80">
                    {t.monFri}<br />
                    {t.saturday}<br />
                    {t.sunday}
                  </p>
                </div>
                
                <p className="text-white/80 mb-6">
                  {t.available}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
