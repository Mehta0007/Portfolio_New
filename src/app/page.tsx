import ColorGame from "@/components/ColorGame";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LinksBar from "@/components/LinksBar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsTable from "@/components/SkillsTable";


export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-16   ">
      <Header />
      <Hero />
      <LinksBar />
      <ColorGame />
      <SkillsTable />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
