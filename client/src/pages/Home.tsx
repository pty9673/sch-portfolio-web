import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #e8f4f8 50%, #f0f8f5 100%)",
        color: "#2d3748",
      }}
    >
      <Navbar />
      <HeroSection />
      <div
        className="border-b"
        style={{ borderColor: "rgba(74, 123, 167, 0.1)" }}
      />
      <ProjectsSection />
      <div
        className="border-b"
        style={{ borderColor: "rgba(74, 123, 167, 0.1)" }}
      />
      <SkillsSection />
      <div
        className="border-b"
        style={{ borderColor: "rgba(74, 123, 167, 0.1)" }}
      />
      <BlogSection />
      <div
        className="border-b"
        style={{ borderColor: "rgba(74, 123, 167, 0.1)" }}
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
