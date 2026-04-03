import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Islom Kamoliddinov — Frontend Developer",
  description:
    "Tezkor, qulay va SEO-optimallashgan interfeyslar yarataman. Dizayner ko'zi bilan, dasturchi qo'li bilan.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Toshkent",
  ],
  icons: {
    icon: "/logo.png",
  },
  creator: "Islom Kamoliddinov",
  publisher: "Islom Kamoliddinov",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Islom Kamoliddinov" }],
  openGraph: {
    title: "Islom Kamoliddinov — Frontend Developer",
    description: "Tezkor, qulay va SEO-optimallashgan interfeyslar yarataman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
