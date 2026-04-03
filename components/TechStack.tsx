const STACK = [
  {
    category: "Core",
    accent: false,
    items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript"],
  },
  {
    category: "Frameworks",
    accent: true,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "State & Data",
    accent: false,
    items: ["Zustand", "React Query", "Redux Toolkit", "jQuery"],
  },
  {
    category: "Tools",
    accent: true,
    items: ["Git & GitHub", "Figma", "Vite", "Vercel"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: "0 40px 64px" }}>
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
          Texnologiyalar
        </div>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "36px",
            letterSpacing: "-1.5px",
            color: "var(--cream)",
          }}
        >
          Tech Stack
        </h2>
        <p
          style={{
            fontSize: "14.5px",
            color: "rgba(250,233,215,0.6)",
            marginTop: "10px",
            lineHeight: 1.7,
          }}
        >
          Asosiy yo&apos;nalishimga fokus qilgan holda tanlangan vositalar —
          ko&apos;p emas, lekin chuqur.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {STACK.map(({ category, accent, items }) => (
          <div
            key={category}
            style={{
              background: "var(--bg2)",
              border: "1px solid rgba(241,192,149,0.15)",
              borderRadius: "18px",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              {category}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    background: "rgba(250,233,215,0.06)",
                    border: "1px solid rgba(250,233,215,0.09)",
                    borderRadius: "10px",
                    padding: "8px 13px",
                    fontSize: "13px",
                    color: "var(--cream)",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: accent ? "var(--gold)" : "var(--red)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
