// src/pages/Work.jsx
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export function Work() {
  return (
    <main className="container mt-5">
      <section className="content">
        <h2 className="text-center mb-3">Projetos</h2>

        <p className="text-center mb-4">
          💡 Experiência prática com sistemas críticos, automações inteligentes e arquitetura multi-tenant.
        </p>

        <p className="text-center mb-3">
          Projetos focados em backend, APIs, automação e soluções orientadas a problemas reais de negócio.
        </p>

        <p className="text-center mb-4">
          Projetos que vão desde sistemas corporativos até automações com IA e arquiteturas SaaS escaláveis.
        </p>

        <p className="text-center mb-5 text-muted">
          * Parte dos projetos não possui interface pública devido a políticas internas e confidencialidade.
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