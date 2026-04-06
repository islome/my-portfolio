"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    location: "Remote / Online",
    type: "Freelance",
    highlights: [
      "Delivered 3+ production-ready web applications for online clients",
      "Built full-stack solutions using Next.js, Supabase, and PostgreSQL",
      "Managed client relationships, requirements gathering, and deployment",
      "Developed real-time features including Telegram bot integrations",
    ],
  },
  {
    role: "IT University Student",
    company: "IT University, Uzbekistan",
    period: "2022 — Present",
    location: "Tashkent, Uzbekistan",
    type: "Education",
    highlights: [
      "Currently in 3rd year, specializing in software development",
      "Applying university knowledge directly in real-world freelance projects",
      "Continuously expanding skills in modern web technologies",
      "Actively building portfolio alongside academic studies",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-[#f8f6f2]" ref={ref}>
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
            Experience
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2035]">
            My Journey
          </h2>
          <p className="text-[#4a6080] mt-3 max-w-lg">
            No big corporations yet — but real work, real growth, real results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-6 w-5 h-5 rounded-full border-2 border-[#c9a84c] bg-white hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                </div>

                <div className="bg-white rounded-sm border border-gray-100 p-6 md:p-8 hover:border-[#c9a84c]/20 hover:shadow-md transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono px-2 py-0.5 bg-[#1e3a5f]/8 text-[#1e3a5f] rounded-sm">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#0f2035]">
                        {exp.role}
                      </h3>
                      <p className="text-[#c9a84c] font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                      <div className="flex items-center justify-end gap-1 text-xs text-[#4a6080]">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-xs text-[#4a6080]">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[#4a6080]"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 p-6 bg-[#1e3a5f] rounded-sm"
        >
          <p className="text-white font-display text-lg font-semibold mb-1">
            Open to opportunities<span className="text-[#c9a84c]">.</span>
          </p>
          <p className="text-white/70 text-sm mb-4">
            I&apos;m actively looking for internships, junior roles, or
            interesting collaborations. Let&apos;s build something great
            together.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a84c] text-[#0f2035] text-sm font-medium rounded-sm hover:bg-[#e8c96a] transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
