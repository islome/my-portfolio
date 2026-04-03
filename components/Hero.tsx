"use client";

import {  Send } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/islome",         Icon: FaGithub   },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/islombek-k-a21759294/",    Icon: FaLinkedin },
  { label: "Telegram", href: "https://t.me/justislombek",               Icon: Send     },
];

const PROFILE_INFO = [
  { label: "Joylashuv: ",    value: "Toshkent, UZ",       accent: false },
  { label: "Tajriba: ",      value: "2+ yil",             accent: false },
  { label: "Mutaxassis: ",   value: "React · Next.js",    accent: false },
  { label: "Holat: ",        value: "● Mavjud",           accent: true  },
];

const STATS = [
  { num: "15+", label: "Loyiha"  },
  { num: "8+",  label: "Mijoz"   },
  { num: "2+",  label: "Yil"     },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ padding: "80px 40px 70px" }}
      className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 items-center"
    >
      {/* ── LEFT ── */}
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(213,80,83,0.12)",
            border: "1px solid rgba(213,80,83,0.25)",
            color: "var(--red)",
            fontSize: "12px",
            fontWeight: 500,
            padding: "5px 13px",
            borderRadius: "100px",
            marginBottom: "22px",
            letterSpacing: "0.5px",
          }}
        >
          <span
            style={{
              width: "6px", height: "6px",
              borderRadius: "50%",
              background: "var(--red)",
              animation: "blink 2s infinite",
            }}
          />
          Available for work
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(38px, 5vw, 54px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-2.5px",
            color: "var(--cream)",
            marginBottom: "14px",
          }}
        >
          Salom, men
          <br />
          <span style={{ color: "var(--red)" }}>Islombek</span> —
          <br />
          Frontend Dev.
        </h1>

        {/* Value proposition */}
        <p
          style={{
            fontSize: "15px",
            color: "rgba(250,233,215,0.6)",
            lineHeight: 1.75,
            maxWidth: "420px",
            marginBottom: "30px",
          }}
        >
          Tezkor, qulay va SEO-optimallashgan interfeyslar yarataman.{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
            Dizayner ko&apos;zi bilan, dasturchi qo&apos;li bilan.
          </em>
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              background: "var(--red)",
              color: "var(--cream)",
              padding: "13px 26px",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Loyihalarni ko&apos;rish
          </a>
          <a
            href="/resume_2025.pdf"
            download="Islom_Kamoliddinov_Resume.pdf"
            style={{
              background: "transparent",
              color: "var(--cream)",
              border: "1px solid rgba(250,233,215,0.2)",
              padding: "13px 26px",
              borderRadius: "100px",
              fontSize: "14px",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(250,233,215,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(250,233,215,0.2)")}
          >
            CV yuklab olish
          </a>
        </div>

        {/* Social pills */}
        <div style={{ display: "flex", gap: "10px", marginTop: "28px", flexWrap: "wrap" }}>
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "rgba(241,192,149,0.08)",
                border: "1px solid rgba(241,192,149,0.15)",
                color: "var(--gold)",
                fontSize: "12px",
                padding: "6px 14px",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(241,192,149,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(241,192,149,0.08)")}
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Profile Card ── */}
      <div
        style={{
          background: "var(--bg2)",
          border: "1px solid rgba(241,192,149,0.15)",
          borderRadius: "22px",
          padding: "28px",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "var(--bg3)",
            border: "2px solid rgba(213,80,83,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            color: "var(--gold)",
            marginBottom: "14px",
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="Islombek Kamoliddinov"
            width={200}
            height={200}
            style={{ borderRadius: "50%", objectFit: "cover" }}

          />

        </div>

        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            color: "var(--cream)",
          }}
        >
          Islombek Kamoliddinov
        </div>
        <div
          style={{
            fontSize: "12.5px",
            color: "var(--gold)",
            marginTop: "3px",
            marginBottom: "18px",
          }}
        >
          Frontend / Fullstack Developer
        </div>

        {/* Info rows */}
        <div
          style={{
            borderTop: "1px solid rgba(241,192,149,0.15)",
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {PROFILE_INFO.map(({ label, value, accent }) => (
            <div
              key={label}
              style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}
            >
              <span style={{ color: "rgba(250,233,215,0.3)" }}>{label}</span>
              <span
                style={{
                  color: accent ? "var(--red)" : "var(--cream)",
                  fontWeight: 500,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              style={{
                background: "var(--bg3)",
                borderRadius: "12px",
                padding: "12px 8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "var(--red)",
                }}
              >
                {num}
              </div>
              <div
                style={{ fontSize: "11px", color: "rgba(250,233,215,0.3)", marginTop: "2px" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}