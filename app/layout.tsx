import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Islombek Kamoliddinov — Frontend Developer",
  description:
    "Software & Frontend Developer. Student, freelancer, self-employee. Building real products with Next.js, React, TypeScript and more.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Islombek Kamoliddinov",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  authors: [{ name: "Islombek Kamoliddinov" }],
  openGraph: {
    title: "Islombek Kamoliddinov — Frontend Developer",
    description:
      "Software & Frontend Developer. Student, freelancer, self-employee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
