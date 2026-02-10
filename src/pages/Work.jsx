// src/pages/Work.jsx
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export function Work() {
  return (
    <main className="container mt-5">
      <section className="content">
        <h2 className="text-center">Trabalhos</h2>

        <p>
          Abaixo estão alguns projetos relevantes nos quais atuei, com foco em
          backend, APIs e automação.
        </p>
        <p>
          <strong>Observação:</strong> Por políticas internas, alguns projetos não
          possuem material visual público.
        </p>


        <div className="projects">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
