import HeroSection from "@/components/HeroSection";
import QuickLinks from "@/components/QuickLinks";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white">
      <main>
        <HeroSection />
        <QuickLinks />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
