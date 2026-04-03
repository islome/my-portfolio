"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaMailBulk } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    Icon: FaTelegram,
    label: "Telegram",
    value: "@islomdev",
    href: "https://t.me/justislombek",
    accentColor: "rgba(213,80,83,0.1)",
    iconColor: "#0088cc",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/islombek",
    href: "https://www.linkedin.com/in/islombek-k-a21759294/",
    accentColor: "rgba(10,102,194,0.1)",
    iconColor: "#0077b5",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "github.com/islomdev",
    href: "https://github.com/islome",
    accentColor: "rgba(241,241,241,0.1)",
    iconColor: "#fff",
  },
  {
    Icon: FaMailBulk,
    label: "Email",
    value: "islombekkamoliddinov1@gmail.com",
    href: "mailto:islombekkamoliddinov1@gmail.com",
    accentColor: "rgba(213,80,83,0.1)",
    iconColor: "#d55053",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const token = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    const text = `
    📩 Yangi xabar:
    👤 Kimdan: ${form.name}
    📧 Email: ${form.email}
    📌 Mavzu: ${form.subject}
    💬 Xabar: ${form.message}
  `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        },
      );

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Xatolik");
      }
    } catch (error) {
      alert("Xabar yuborilmadi!");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(250,233,215,0.05)",
    border: "1px solid rgba(250,233,215,0.1)",
    borderRadius: "10px",
    padding: "13px 16px",
    color: "var(--cream)",
    fontSize: "13.5px",
    fontFamily: "inherit",
    width: "100%",
    outline: "none",
  };

  return (
    <section id="contact" style={{ padding: "0 40px 64px" }}>
      {/* Header */}
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
          Aloqa
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
          Keling, suhbatlashamiz
        </h2>
        <p
          style={{
            fontSize: "14.5px",
            color: "rgba(250,233,215,0.6)",
            marginTop: "10px",
            maxWidth: "420px",
            lineHeight: 1.7,
          }}
        >
          Loyiha bormi? Yoki shunchaki tanishmoqchimisiz? Men tayyor.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* ── Social links ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {CONTACT_LINKS.map(
            ({ Icon, label, value, href, accentColor, iconColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "var(--bg2)",
                  border: "1px solid rgba(241,192,149,0.15)",
                  borderRadius: "14px",
                  padding: "16px 18px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(213,80,83,0.35)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(241,192,149,0.15)")
                }
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: accentColor,
                    border: `1px solid ${accentColor.replace("0.1", "0.22")}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "12px",
                    color: "var(--red)",
                    fontWeight: 700,
                  }}
                >
                  <Icon size={18} color={iconColor} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(250,233,215,0.3)",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: "13.5px", color: "var(--cream)" }}>
                    {value}
                  </div>
                </div>
              </a>
            ),
          )}
        </div>

        {/* ── Contact form ── */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "var(--bg2)",
            border: "1px solid rgba(241,192,149,0.15)",
            borderRadius: "18px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <input
              style={inputStyle}
              type="text"
              placeholder="Ismingiz"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <input
            style={inputStyle}
            type="text"
            placeholder="Mavzu"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />

          <textarea
            style={{ ...inputStyle, resize: "none", height: "110px" }}
            placeholder="Xabaringiz..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button
            type="submit"
            disabled={status !== "idle"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              background:
                status === "sent" ? "rgba(213,80,83,0.6)" : "var(--red)",
              color: "var(--cream)",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: status !== "idle" ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.2s",
            }}
          >
            {status === "sending" ? (
              "Yuborilmoqda..."
            ) : status === "sent" ? (
              "Yuborildi ✓"
            ) : (
              <>Yuborish</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
