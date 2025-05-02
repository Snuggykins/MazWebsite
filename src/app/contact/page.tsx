"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "@/hooks/useMode";

export default function Contact() {
  const { mode } = useMode();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
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
              Contact <span className={accentColorClass}>Us</span>
            </h1>
            
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              {mode === "cars" 
                ? "Ready to start your custom automotive project? Get in touch with our team of specialists." 
                : "Have a space you'd like to transform? Reach out to discuss your interior design vision."}
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
                Send a <span className={accentColorClass}>Message</span>
              </h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card/5 p-8 rounded-sm text-center"
                >
                  <p className="text-white text-xl mb-4">Thank you!</p>
                  <p className="text-white/80">
                    Your message has been received. We&apos;ll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
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
                      Email
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
                      Message
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
                    Send Message
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
                Contact <span className={accentColorClass}>Information</span>
              </h2>
              
              <div className="bg-card/5 p-8 rounded-sm space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">Location</h3>
                  <p className="text-white/80">
                    123 Design Avenue<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">Contact</h3>
                  <p className="text-white/80">
                    Phone: (212) 555-1234<br />
                    Email: info@maz{mode === "cars" ? "customs" : "decor"}.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">Hours</h3>
                  <p className="text-white/80">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
                
                <p className="text-white/80 mb-6">
                  Our team is available to discuss your project, answer questions, or 
                  schedule a consultation. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
