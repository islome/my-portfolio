"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 bg-[#0f2035] text-white/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-white text-sm">
          IK<span className="text-[#c9a84c]">.</span>
        </span>
        <p className="text-xs font-mono text-center">
          © {year} Islombek Kamoliddinov. Built with Next.js & Tailwind CSS.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs font-mono hover:text-[#c9a84c] transition-colors"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
