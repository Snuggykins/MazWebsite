"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StickySwitch } from './StickySwitch';
import { useMode } from "@/hooks/useMode";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { mode } = useMode();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const accentColorClass = mode === "cars" ? "text-cars" : "text-decor";
  
  return (
    <header className={`sticky top-0 z-40 w-full ${scrolled ? 'bg-black/60' : 'bg-black/40'} backdrop-blur-sm border-b border-line transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo on the left */}
        <div className="flex-shrink-0 z-20">
          <Link 
            href="/" 
            className="flex items-center font-heading font-bold text-xl text-white"
            aria-label="Home"
          >
            <span>MAZ {mode === "cars" ? "CUSTOMS": "DECOR"}</span>
          </Link>
        </div>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${
                      isActive 
                        ? accentColorClass 
                        : 'text-white hover:' + accentColorClass
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Mode switch and mobile menu button */}
        <div className="flex items-center space-x-4 z-20">
          {/* Mode Switch - Desktop only */}
          <div className="hidden md:block">
            <StickySwitch />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5 relative">
              <span 
                className={`block h-0.5 ${isOpen ? 'w-6 absolute top-1.5 rotate-45' : 'w-6'} bg-white transition-all duration-300`}
              ></span>
              <span 
                className={`block h-0.5 w-4 bg-white ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              ></span>
              <span 
                className={`block h-0.5 ${isOpen ? 'w-6 absolute top-1.5 -rotate-45' : 'w-5'} bg-white transition-all duration-300`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <div className=" h-full pt-20 pb-8 px-6 bg-black/80 backdrop-blur-xl">
                {/* Mobile Navigation Links */}
                <nav className="flex-grow">
                  <ul className="space-y-6 pt-8">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <Link 
                            href={item.href}
                            className={`block text-xl font-heading font-medium ${
                              isActive ? accentColorClass : 'text-white'
                            }`}
                            onClick={() => setIsOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                
                {/* Mobile Mode Switch */}
                <div className="pt-8 pb-4">
                  <StickySwitch />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
