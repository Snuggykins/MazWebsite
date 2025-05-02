"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/hooks/useMode";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";

export default function Gallery() {
  const { mode } = useMode();
  const { language } = useLanguage();
  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  const accentBgClass = mode === "cars" ? "bg-cars" : "bg-decor";
  
  // Translations
  const texts = {
    en: {
      gallery: "Our Gallery",
      carsDescription: "Explore our portfolio of custom automotive projects, each crafted with precision and passion.",
      decorDescription: "Browse our collection of interior design projects that showcase our distinctive aesthetic approach.",
      allProjects: "All Projects",
      closeModal: "Close modal",
      customBuild: "Custom Build",
      interiorDesign: "Interior Design",
      performance: "Performance",
      residential: "Residential"
    },
    ro: {
      gallery: "Galeria Noastră",
      carsDescription: "Explorați portofoliul nostru de proiecte auto personalizate, fiecare realizat cu precizie și pasiune.",
      decorDescription: "Răsfoiți colecția noastră de proiecte de design interior care prezintă abordarea noastră estetică distinctivă.",
      allProjects: "Toate Proiectele",
      closeModal: "Închide modalul",
      customBuild: "Construcție Personalizată",
      interiorDesign: "Design Interior",
      performance: "Performanță",
      residential: "Rezidențial"
    }
  };
  
  const t = texts[language];
  
  // Get localized gallery items
  const getGalleryItems = () => {
    if (language === "en") {
      return [
        { 
          id: 1, 
          title: mode === "cars" ? "Custom Blue Coupe" : "Modern Living Room",
          description: mode === "cars" ? "Performance-focused custom build with aerodynamic enhancements." : "Minimalist design with carefully selected accent pieces.",
          year: "2024",
        },
        { 
          id: 2, 
          title: mode === "cars" ? "Vintage Restoration" : "Dining Area Transformation",
          description: mode === "cars" ? "Complete restoration with modern performance upgrades." : "Custom dining table with complementary lighting fixtures.",
          year: "2023",
        },
        { 
          id: 3, 
          title: mode === "cars" ? "Track-Day Special" : "Master Bedroom Suite",
          description: mode === "cars" ? "Lightweight components with race-inspired aesthetics." : "Serene bedroom design with custom headboard and accent lighting.",
          year: "2022",
        },
        { 
          id: 4, 
          title: mode === "cars" ? "Luxury Sedan Upgrade" : "Home Office Design",
          description: mode === "cars" ? "Interior and exterior refinements for enhanced luxury." : "Productive workspace with custom storage solutions.",
          year: "2022",
        },
        { 
          id: 5, 
          title: mode === "cars" ? "Rally-Inspired Build" : "Entry Foyer Redesign",
          description: mode === "cars" ? "Off-road capable with enhanced suspension and lighting." : "Striking first impression with custom wall treatment.",
          year: "2021",
        },
        { 
          id: 6, 
          title: mode === "cars" ? "Exotic Detail Package" : "Kitchen Renovation",
          description: mode === "cars" ? "Precision detailing and paint correction for exotic vehicles." : "Modern kitchen with custom cabinetry and island design.",
          year: "2021",
        },
      ];
    } else {
      return [
        { 
          id: 1, 
          title: mode === "cars" ? "Coupe Albastru Personalizat" : "Living Modern",
          description: mode === "cars" ? "Construcție personalizată orientată spre performanță cu îmbunătățiri aerodinamice." : "Design minimalist cu piese de accent atent selectate.",
          year: "2024",
        },
        { 
          id: 2, 
          title: mode === "cars" ? "Restaurare Vintage" : "Transformare Zonă de Dining",
          description: mode === "cars" ? "Restaurare completă cu îmbunătățiri de performanță moderne." : "Masă de dining personalizată cu instalații de iluminat complementare.",
          year: "2023",
        },
        { 
          id: 3, 
          title: mode === "cars" ? "Special pentru Circuit" : "Dormitor Principal",
          description: mode === "cars" ? "Componente ușoare cu estetică inspirată din curse." : "Design de dormitor senin cu tăblie personalizată și iluminat de accent.",
          year: "2022",
        },
        { 
          id: 4, 
          title: mode === "cars" ? "Upgrade Sedan de Lux" : "Design Birou Acasă",
          description: mode === "cars" ? "Rafinamente interioare și exterioare pentru lux îmbunătățit." : "Spațiu de lucru productiv cu soluții personalizate de depozitare.",
          year: "2022",
        },
        { 
          id: 5, 
          title: mode === "cars" ? "Construcție Inspirată de Raliuri" : "Redesign Hol de Intrare",
          description: mode === "cars" ? "Capabil de off-road cu suspensie și iluminare îmbunătățite." : "Prima impresie remarcabilă cu tratament personalizat al pereților.",
          year: "2021",
        },
        { 
          id: 6, 
          title: mode === "cars" ? "Pachet de Detalii Exotice" : "Renovare Bucătărie",
          description: mode === "cars" ? "Detaliere de precizie și corecție a vopselei pentru vehicule exotice." : "Bucătărie modernă cu dulapuri personalizate și design de insulă.",
          year: "2021",
        },
      ];
    }
  };
  
  // Sample gallery items that will use the same image for demonstration
  const galleryItems = getGalleryItems();
  
  // Track which gallery item is being previewed
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = galleryItems.find(item => item.id === selectedId);
  
  // Filter state
  const [filter, setFilter] = useState<string>("all");
  const yearFilters = ["all", "2024", "2023", "2022", "2021"];
  
  // Filtered gallery items
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.year === filter);

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
              {t.gallery.split(' ')[0]} <span className={accentColorClass}>{t.gallery.split(' ')[1]}</span>
            </h1>
            
            <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
              {mode === "cars" ? t.carsDescription : t.decorDescription}
            </p>
          </motion.div>
          
          {/* Filtering options */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-card/5 rounded-sm overflow-hidden">
              {yearFilters.map(yearFilter => (
                <button
                  key={yearFilter}
                  onClick={() => setFilter(yearFilter)}
                  className={`px-6 py-2 text-sm font-medium transition-colors ${
                    filter === yearFilter
                      ? `${accentBgClass} text-white`
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-label={yearFilter === "all" ? "Show all projects" : `Filter by year ${yearFilter}`}
                >
                  {yearFilter === "all" ? t.allProjects : yearFilter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery grid with purposeful motion */}
      <section className="w-full pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-card/5 rounded-sm overflow-hidden cursor-pointer"
                  onClick={() => setSelectedId(item.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={mode === "cars" 
                        ? "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress" 
                        : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress"
                      }
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <p className={`text-sm mb-2 ${accentColorClass}`}>{item.year}</p>
                      <h2 className="text-xl font-heading font-semibold text-white">{item.title}</h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Modal for project details */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-background max-w-4xl w-full max-h-[90vh] overflow-auto rounded-sm"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-80 md:h-96">
                <Image
                  src={mode === "cars" 
                    ? "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress" 
                    : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress"
                  }
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedId(null)}
                  aria-label={t.closeModal}
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <p className={`text-sm mb-2 ${accentColorClass}`}>{selectedItem.year}</p>
                <h2 className="text-3xl font-heading font-bold mb-4 text-white">{selectedItem.title}</h2>
                <p className="text-white/80 mb-6">{selectedItem.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block px-3 py-1 rounded-sm bg-card/10 text-white/70 text-sm">
                    {mode === "cars" ? t.customBuild : t.interiorDesign}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-sm bg-card/10 text-white/70 text-sm">
                    {selectedItem.year}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-sm bg-card/10 text-white/70 text-sm">
                    {mode === "cars" ? t.performance : t.residential}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
