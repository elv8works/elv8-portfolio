import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  // Track scroll position to adjust opacity
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // Calculate opacity: starts at 1, fades toward 0.2 as you scroll 300px
      const newOpacity = Math.max(0.2, 1 - position / 400);
      setScrolled(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="fixed top-0 w-full z-[100] transition-all duration-300"
      style={{ opacity: scrolled || 1 }}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-6 mix-blend-difference text-white">
        <span className="font-black text-2xl tracking-tighter">elv8.works</span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-500 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col items-center justify-center space-y-8 text-2xl font-bold uppercase tracking-widest md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}