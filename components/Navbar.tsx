"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-xl text-[#0f2035] tracking-tight"
          >
            IK<span className="text-[#c9a84c]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#4a6080] hover:text-[#1e3a5f] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="/resume_2025.pdf"
              download
              className="text-sm font-medium px-4 py-2 bg-[#1e3a5f] text-white rounded-sm hover:bg-[#0f2035] transition-colors duration-200"
            >
              Resume
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[#1e3a5f] hover:text-[#c9a84c] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-display font-bold text-xl text-[#0f2035]">
                  IK<span className="text-[#c9a84c]">.</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#4a6080] hover:text-[#1e3a5f] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1 p-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-3 px-4 text-base font-medium text-[#0f2035] hover:bg-[#f8f6f2] hover:text-[#c9a84c] rounded-sm transition-all duration-200 border-b border-gray-50"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Resume button */}
              <div className="p-6 border-t border-gray-100">
                <a
                  href="/resume_2025.pdf"
                  download
                  className="block w-full text-center py-3 bg-[#1e3a5f] text-white font-medium rounded-sm hover:bg-[#0f2035] transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
