"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma"],
  Tools: ["Git", "Docker", "Figma", "Vercel", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#7C3AED] text-sm font-medium tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#7C3AED]/30 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 text-neutral-300 text-sm px-3 py-1.5 rounded-lg hover:bg-[#7C3AED]/20 hover:text-[#A78BFA] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
