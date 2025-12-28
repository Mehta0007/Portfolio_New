import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Latest Projects</h2>

      <div className="grid gap-4">
        <ProjectCard />
      </div>
    </section>
  );
}
