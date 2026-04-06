"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "1",
    name: "Al-Quran",
    description:
      "A Quran app with translations and audio. This project is built using Next.js, TypeScript, and Tailwind CSS. Islamic design inspired by the beauty of the Quran. ",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/islome/quran-app", 
    live: "https://al-quran-iota.vercel.app", 
  },
  {
    number: "2",
    name: "Football Hub",
    description:
      "A football dashboard for live stats, matches and updates. Built with React and Node.js, it integrates with football APIs to provide real-time data. A must-have for football fans.",
    tags: ["Next.js", "Node.js", "API"],
    github: "https://github.com/islome/football-hub", 
    live: "https://football-hub-navy.vercel.app", 
  },
  {
    number: "3",
    name: "Best Globalize",
    description:
      "Company that offers jobs for uzbek citizens in the global market. Built with Next.js and Supabase, it provides a seamless experience for job seekers and employers. A platform that connects talent with opportunity worldwide.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    github: "https://github.com/islome/migration", 
    live: "https://migration-beta.vercel.app", 
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
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
            Projects
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0f2035]">
            What I&apos;ve Built
          </h2>
          <p className="text-[#4a6080] mt-3 max-w-lg">
            Real projects. Real clients. Shipped and live.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-gray-100">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-[#f8f6f2] -mx-6 px-6 transition-colors duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#c9a84c] font-medium w-8 shrink-0">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#0f2035] group-hover:text-[#1e3a5f] transition-colors">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0 translate-x-0 duration-300"
                  />
                </div>
                <p className="text-[#4a6080] text-sm leading-relaxed mb-3 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 bg-[#1e3a5f]/6 text-[#1e3a5f] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-[#4a6080] hover:text-[#1e3a5f] hover:bg-[#1e3a5f]/8 rounded-sm transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 text-[#4a6080] hover:text-[#c9a84c] hover:bg-[#c9a84c]/8 rounded-sm transition-all"
                  aria-label="Live demo"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
