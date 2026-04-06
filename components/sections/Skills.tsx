"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Deno", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    category: "Specialties",
    skills: ["Telegram Bots", "Real-time Apps", "REST APIs", "Freelancing"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-[#f8f6f2]" ref={ref}>
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
            Skills
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-[#0f2035] mb-12"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + gi * 0.1 }}
              className="bg-white rounded-sm border border-gray-100 p-6 hover:border-[#c9a84c]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-5 bg-[#c9a84c] rounded-full" />
                <h3 className="font-semibold text-[#0f2035] tracking-wide text-sm uppercase">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + gi * 0.1 + si * 0.06,
                    }}
                    className="px-3 py-1.5 bg-[#f8f6f2] border border-gray-100 text-[#1e3a5f] text-sm font-medium rounded-sm hover:border-[#c9a84c]/40 hover:bg-[#c9a84c]/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-sm text-[#4a6080] font-mono text-center"
        >
          + Always learning something new
          <span className="text-[#c9a84c] ml-1">_</span>
        </motion.p>
      </div>
    </section>
  );
}
