"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, Zap } from "lucide-react";

const traits = [
  {
    icon: GraduationCap,
    title: "Student",
    desc: "3rd year at IT University, always learning and growing.",
  },
  {
    icon: Briefcase,
    title: "Freelancer",
    desc: "Building real products for online clients for over a year.",
  },
  {
    icon: Code2,
    title: "Self-Employed",
    desc: "Running my own projects end-to-end, from idea to deployment.",
  },
  {
    icon: Zap,
    title: "Chill Builder",
    desc: "Passionate, focused, and always ready to take on new challenges.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-xs font-mono text-[#c9a84c] tracking-widest uppercase">
            About
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2035] leading-tight mb-6">
              A developer who{" "}
              <span className="text-[#c9a84c] italic">actually ships.</span>
            </h2>
            <div className="space-y-4 text-[#4a6080] leading-relaxed">
              <p>
                I&apos;m Islombek — a software and frontend developer based in
                Uzbekistan. Currently in my 3rd year at IT University, I&apos;ve
                been freelancing for over a year, delivering real products to
                real clients online.
              </p>
              <p>
                I don&apos;t just write code — I build solutions. From Al-Quran
                apps to football dashboards, I take ideas all the way from
                concept to deployment. My stack is modern, my approach is
                practical, and my mindset is always forward.
              </p>
              <p>
                I may not have big-company experience yet — but I&apos;m hungry
                for it. Every project I take on is a step toward becoming the
                developer I&apos;m meant to be.
              </p>
            </div>

            {/* Gold accent bar */}
            <div className="mt-8 pl-4 border-l-2 border-[#c9a84c]">
              <p className="text-[#1e3a5f] font-medium italic font-display text-lg">
                &quot;Ready to grow. Ready to build. Ready to deliver.&quot;
              </p>
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-5 bg-[#f8f6f2] rounded-sm border border-gray-100 hover:border-[#c9a84c]/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#1e3a5f]/8 rounded-sm mb-3 group-hover:bg-[#c9a84c]/10 transition-colors">
                  <trait.icon
                    size={16}
                    className="text-[#1e3a5f] group-hover:text-[#c9a84c] transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-[#0f2035] text-sm mb-1">
                  {trait.title}
                </h3>
                <p className="text-xs text-[#4a6080] leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
