"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#f8f6f2]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/8 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Vertical line accent */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-[#c9a84c]/40" />
        <span className="text-xs font-mono text-[#4a6080] rotate-90 tracking-widest">
          2025
        </span>
        <div className="w-px h-24 bg-[#c9a84c]/40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-xs font-mono font-medium text-[#c9a84c] tracking-widest uppercase">
              Software & Frontend Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-[#0f2035] leading-[1.05] mb-6"
          >
            Islombek
            <br />
            <span className="text-[#1e3a5f]">Kamoliddinov</span>
            <span className="text-[#c9a84c]">.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#4a6080] font-body leading-relaxed mb-10 max-w-xl"
          >
            Student. Freelancer. Builder.{" "}
            <span className="text-[#1e3a5f] font-medium">
              Crafting real-world products
            </span>{" "}
            with modern web technologies — one line of code at a time.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 bg-[#1e3a5f] text-white font-medium text-sm rounded-sm hover:bg-[#0f2035] transition-all duration-200 hover:shadow-lg hover:shadow-[#1e3a5f]/20"
            >
              View Projects
            </button>
            <a
              href="/resume_2025.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1e3a5f] text-[#1e3a5f] font-medium text-sm rounded-sm hover:bg-[#1e3a5f] hover:text-white transition-all duration-200"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#1e3a5f]/10"
          >
            {[
              { value: "1+", label: "Year Freelancing" },
              { value: "3+", label: "Projects Shipped" },
              { value: "3rd", label: "Year at IT University" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-[#1e3a5f]">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-[#4a6080] mt-0.5 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a6080] hover:text-[#c9a84c] transition-colors"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
