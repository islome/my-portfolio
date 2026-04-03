const LEARNING = [
  "React Server Components va Next.js App Router",
  "Testing — Vitest va React Testing Library",
  "Web Animations API va murakkab animatsiyalar",
  "Performance optimization va Core Web Vitals",
];

const SOFT_SKILLS = [
  "Jamoada ishlash — vazifalarni taqsimlash, muloqot va feedback",
  "Muammolarni tahlil qilish — debug qilishdan, tizim o'ylashgacha",
  "Nutq va taqdimot — g'oyalarni aniq va ravshan tushuntirishni yaxshi ko'raman",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "0 40px 64px" }}>
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
          Men haqimda
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
          Kod yozaman,
          <br />
          dizayn bilan o&apos;ylayman
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 260px",
          gap: "40px",
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-[1fr_260px]"
      >
        <div>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(250,233,215,0.6)",
              lineHeight: 1.8,
              marginBottom: "14px",
            }}
          >
            Men avval{" "}
            <span style={{ color: "var(--gold)" }}>Graphic Designer</span>{" "}
            bo&apos;lganman. Vizual narsalarga muhabbatim bor edi — rang,
            kompozitsiya, tipografiya. Keyin bir kun tushundimki, bu narsalarni
            nafaqat ko&apos;rsatish, balki{" "}
            <span style={{ color: "var(--gold)" }}>hayotga keltirish</span>{" "}
            mumkin ekan — kod orqali.
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(250,233,215,0.6)",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Shu sabab Frontend Development yo&apos;nalishiga o&apos;tdim.
            Dizaynerlik tajribam menga faqat ishlaydigan emas,{" "}
            <span style={{ color: "var(--gold)" }}>
              go&apos;zal ham ishlaydigani
            </span>{" "}
            interfeyslar yaratishga yordam beradi. Har bir component
            pixel-perfect bo&apos;lishi kerak deb o&apos;ylayman.
          </p>

          {/* Soft skills */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "13.5px",
                  color: "rgba(250,233,215,0.6)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--red)",
                    flexShrink: 0,
                    marginTop: "6px",
                  }}
                />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right — learning aside */}
        <div
          style={{
            background: "var(--bg2)",
            border: "1px solid rgba(241,192,149,0.15)",
            borderRadius: "18px",
            padding: "22px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Hozirda o&apos;rganyapman
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {LEARNING.map((item, i) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "10px",
                  fontSize: "13px",
                  color: "rgba(250,233,215,0.6)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "var(--red)",
                    fontWeight: 700,
                    fontSize: "13px",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
