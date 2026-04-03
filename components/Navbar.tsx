"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Loyihalar", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Men haqimda", href: "#about" },
  { label: "Aloqa", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? "rgba(48,35,45,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(241,192,149,0.12)"
          : "1px solid rgba(241,192,149,0.15)",
        position: "sticky",
        top: 0,
        width: "100%",
        left: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        padding: "20px 0",
      }}
    >
      <div className="flex items-center justify-between px-10 py-[22px]">
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "19px",
            letterSpacing: "-0.5px",
            color: "var(--cream)",
            textDecoration: "none",
          }}
        >
          Islombek<span style={{ color: "var(--red)" }}>.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "rgba(250,233,215,0.6)",
                  fontSize: "13.5px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(250,233,215,0.6)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block"
          style={{
            background: "var(--red)",
            color: "var(--cream)",
            padding: "9px 20px",
            borderRadius: "100px",
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "var(--cream)",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(241,192,149,0.1)",
            padding: "20px 40px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                color: "rgba(250,233,215,0.75)",
                fontSize: "15px",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: "var(--red)",
              color: "var(--cream)",
              padding: "11px 20px",
              borderRadius: "100px",
              fontSize: "14px",
              textAlign: "center",
              textDecoration: "none",
              marginTop: "4px",
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
