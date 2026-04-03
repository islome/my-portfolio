import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[960px] mx-auto">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
