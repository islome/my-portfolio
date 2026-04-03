export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "28px 40px",
        borderTop: "1px solid rgba(241,192,149,0.1)",
        fontSize: "13px",
        color: "rgba(250,233,215,0.3)",
      }}
    >
      <p>
        © {year} Islombek Kamoliddinov — Next.js & Tailwind CSS bilan yaratilgan{" "}
        <span style={{ color: "var(--red)" }}>♥</span>
      </p>
    </footer>
  );
}
