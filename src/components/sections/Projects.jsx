import SectionWrapper from "../layout/SectionWrapper";
import RevealOnScroll from "../../shared/RevealOnScroll";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      number="03"
      label="Projets"
      title="Réalisations Full Stack"
      subtitle="Chaque projet, du concept au déploiement, avec une attention égale portée au code et à l'expérience utilisateur."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <RevealOnScroll key={p.id} delay={i * 0.08}>
            <ProjectCard project={p} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
