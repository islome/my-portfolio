import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  siteName:   string;
  tagline:    string;
  why:        string;
  caseStudy:  string;
  stack:      string[];
  github:     string;
  live:       string;
  image:      string | null; // e.g. "/projects/project1.png"  — null = placeholder
}

const PROJECTS: Project[] = [
  {
    siteName:  "brotest.uz",
    tagline:   "Haydovchilik guvohnomasi testiga tayyorlanish uchun — interaktiv platforma",
    why:       "Mavjud test platformalari eskirgan va foydalanuvchi tajribasi yomon edi. O'quvchilarni jalb qiladigan zamonaviy, interaktiv yechim yaratmoqchi edim.",
    caseStudy: "Loyihaning birinchi versiyasida foydalanuvchilar testni boshlaganda sahifa 3 soniyaga qadar javobsiz qolardi. Sahifa yuklanishini optimallashtirish va React Query yordamida ma'lumotlarni keshlash orqali bu muammoni hal qildim.",
    stack:     ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase", "React Query"],
    github:    "https://github.com/islome/brotest",
    live:      "https://brotest.vercel.app",
    image:     "/project1.png",
  },
  {
    siteName:  "Migration",
    tagline:   "Chet elga ishga yuboruvchi agentliklar uchun maxsus analitika platformasi",
    why:       "Chet elga ishga yuboruvchi ko'p sertifikatli agentliklar uchun maxsus analitika platformasi yo'q edi. Mijozlarga real-time ma'lumotlarni vizualizatsiya qilish va tahlil qilish imkonini beradigan yechim yaratmoqchi edim. Unda Admin paneli ham bor, agentlik xodimlari o'z mijozlarini va ularning ma'lumotlarini boshqarishlari mumkin.",
    caseStudy: "Recharts kutubxonasidan foydalangan holda, ma'lumotlarni samarali vizualizatsiya qilish uchun maxsus komponentlar yaratdim. Bu foydalanuvchilarga real-time ma'lumotlarni tezda tahlil qilish va qaror qabul qilish imkonini berdi.",
    stack:     ["React", "TypeScript", "Tailwind CSS", "Recharts", "Ai asistent"],
    github:    "https://github.com/islome/migration",
    live:      "https://migration-beta.vercel.app",
    image:     "/project2.png",
  },
  {
    siteName:  "Football Hub",
    tagline:   "Futbol yangiliklari va statistikasi uchun zamonaviy platforma",
    why:       "Futbol ishqibozlari uchun yangiliklar, jamoalar va o'yin statistikasi bilan boyitilgan zamonaviy platforma yaratmoqchi edim. Maqsadim foydalanuvchilarga o'z sevimli jamoalari va o'yinlari haqida real-time ma'lumotlarni taqdim etish edi.",
    caseStudy: "Loyihaning dastlabki versiyasida, foydalanuvchilar yangiliklar va statistikani ko'rishda sekinlikni sezishdi. Ma'lumotlarni samarali boshqarish va tezkor yuklanishni ta'minlash uchun server tomonida rendering (SSR) va ma'lumotlarni keshlash strategiyalarini qo'lladim.",
    stack:     ["Next.js", "TypeScript", "Tailwind CSS", "Rest API", "React Query"],
    github:    "https://github.com/islome/football-hub",
    live:      "https://football-hub-navy.vercel.app/",
    image:     "/project3.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        background: "var(--bg2)",
        border: "1px solid rgba(241,192,149,0.15)",
        borderRadius: "22px",
        overflow: "hidden",
      }}
    >
      {/* ── Screenshot area ── */}
      <div
        style={{
          background: "var(--bg3)",
          height: "220px",
          position: "relative",
          borderBottom: "1px solid rgba(241,192,149,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.siteName} screenshot`}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 340px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(213,80,83,0.12)",
                border: "1px solid rgba(213,80,83,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="18" height="14" rx="2" stroke="#d55053" strokeWidth="1.5" />
                <path d="M7 20h8M11 16v4" stroke="#d55053" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontSize: "12px", color: "rgba(250,233,215,0.3)" }}>
              Screenshot joylashtiriladi
            </div>
          </div>
        )}

        {/* Site domain badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: "rgba(48,35,45,0.9)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(241,192,149,0.2)",
            borderRadius: "100px",
            padding: "5px 13px",
            fontSize: "12px",
            color: "var(--gold)",
            fontWeight: 500,
          }}
        >
          {project.siteName}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: "26px" }}>
        {/* Top row: title + buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "24px",
                letterSpacing: "-0.8px",
                color: "var(--cream)",
              }}
            >
              {project.siteName}
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(250,233,215,0.55)", marginTop: "4px" }}>
              {project.tagline}
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "var(--red)",
                color: "var(--cream)",
                padding: "8px 16px",
                borderRadius: "100px",
                fontSize: "12.5px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Saytni ko&apos;rish <ExternalLink size={12} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "transparent",
                color: "rgba(250,233,215,0.6)",
                border: "1px solid rgba(250,233,215,0.15)",
                padding: "8px 16px",
                borderRadius: "100px",
                fontSize: "12.5px",
                textDecoration: "none",
              }}
            >
               GitHub
            </a>
          </div>
        </div>

        {/* Why */}
        <div
          style={{
            background: "rgba(241,192,149,0.06)",
            border: "1px solid rgba(241,192,149,0.12)",
            borderRadius: "12px",
            padding: "14px 16px",
            fontSize: "13.5px",
            color: "rgba(250,233,215,0.6)",
            lineHeight: 1.7,
            marginBottom: "14px",
          }}
        >
          <span style={{ color: "var(--gold)", fontWeight: 500 }}>Nima uchun yaratilgan?</span>{" "}
          — {project.why}
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "18px" }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                background: "rgba(213,80,83,0.1)",
                border: "1px solid rgba(213,80,83,0.22)",
                color: "var(--red)",
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "100px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Case study */}
        <div
          style={{
            borderTop: "1px solid rgba(241,192,149,0.1)",
            paddingTop: "16px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--red)",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Case Study — Muammo va yechim
          </div>
          <p
            style={{
              fontSize: "13.5px",
              color: "rgba(250,233,215,0.55)",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            {project.caseStudy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "0 40px 64px" }}>
      {/* Section header */}
      <div style={{ marginBottom: "36px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "3px",
            color: "var(--red)",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Portfolio
        </div>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "36px",
            letterSpacing: "-1.5px",
            color: "var(--cream)",
            lineHeight: 1.1,
          }}
        >
          Tanlangan loyihalar
        </h2>
        <p
          style={{
            fontSize: "14.5px",
            color: "rgba(250,233,215,0.6)",
            marginTop: "10px",
            maxWidth: "520px",
            lineHeight: 1.7,
          }}
        >
          Sifatli, real va production-ready loyihalar — har biri muammoni yechim bilan ko&apos;rsatadi.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.siteName} project={project} />
        ))}
      </div>
    </section>
  );
}