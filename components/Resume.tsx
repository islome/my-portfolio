"use client";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" style={{ padding: "0 40px 64px" }}>
      <div
        style={{
          background: "var(--bg2)",
          border: "1px solid rgba(241,192,149,0.15)",
          borderRadius: "22px",
          padding: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* Text */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              color: "var(--cream)",
              marginBottom: "6px",
            }}
          >
            Rezyume yuklab olish
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(250,233,215,0.6)",
              lineHeight: 1.6,
              maxWidth: "420px",
            }}
          >
            Ish tajribam, ko&apos;nikmalarim va ta&apos;limim haqida batafsil ma&apos;lumot PDF
            formatida. HR menejerlar uchun qulay va tayyor.
          </p>
        </div>

        {/* PDF info + download */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
          {/* PDF icon */}
          <div
            style={{
              width: "44px",
              height: "44px",
              background: "rgba(213,80,83,0.1)",
              border: "1px solid rgba(213,80,83,0.22)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FileText size={20} color="var(--red)" />
          </div>

          <div>
            <div style={{ fontSize: "11px", color: "rgba(250,233,215,0.3)", marginBottom: "2px" }}>
              PDF fayl
            </div>
            <div style={{ fontSize: "13.5px", color: "var(--cream)", fontWeight: 500 }}>
              Islombek_cv.pdf
            </div>
          </div>

          {/* Download button */}
          <a
            href="/resume_2025.pdf"
            download="Islom_Kamoliddinov_CV.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "var(--red)",
              color: "var(--cream)",
              padding: "12px 22px",
              borderRadius: "12px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
              marginLeft: "6px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Download size={15} />
            <span className="hidden sm:block">Yuklab olish</span>
          </a>
        </div>
      </div>
    </section>
  );
}