import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---------------- Scroll Detection ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
      if (window.scrollY <= 120) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100]">
      <motion.div
        animate={{
          height: scrolled ? 72 : 96,
          backgroundColor: scrolled
            ? "rgba(9,9,11,0.9)"
            : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-between px-6 md:px-10 border-b border-white/5"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <img src="/elv8.png" alt="elv8.works" className="h-20 w-auto" />
          <span className="font-black text-xl tracking-tight">
            elv8.works
          </span>
        </div>

        {/* Full Menu — Only at Top */}
        {!scrolled && (
          <div className="hidden lg:flex gap-10 text-sm uppercase tracking-widest text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Hamburger — Only After Scroll */}
        {scrolled && (
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 text-white hover:text-blue-500 transition"
          >
            <Menu size={28} />
          </button>
        )}
      </motion.div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950 z-[200] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-10 text-3xl font-bold uppercase tracking-widest text-white"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
