// src/pages/Work.jsx
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export function Work() {
  return (
    <main className="container mt-5">
      <section className="content">
        <h2 className="text-center mb-3">Projetos</h2>

        <p className="text-center mb-5">
          Projetos focados em backend, automação, APIs, integração de sistemas
          e soluções orientadas a problemas reais de negócio.
        </p>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
