import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-center mt-5">Projeto não encontrado.</p>;
  }

  return (
    <main className="container mt-5">
      <section className="content project-detail">
        <Link to="/work" className="back-link">
          ← Voltar para projetos
        </Link>

        <h2>{project.title}</h2>

        <div className="project-section">
          <h3>Problema</h3>
          <p>{project.problem}</p>
        </div>

        <div className="project-section">
          <h3>Solução</h3>
          <p>{project.solution}</p>
        </div>

        <div className="project-section">
          <h3>Resultado</h3>
          <p>{project.result}</p>
        </div>

        <div className="project-section">
          <h3>Tecnologias utilizadas</h3>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-section">
          <h3>Principais funcionalidades</h3>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        {project.links && (
          <div className="project-links">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="cta-button"
              >
                Ver código
              </a>
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="cta-button"
              >
                Ver projeto online
              </a>
            )}

            {project.links.portfolio && (
              <a
                href={project.links.portfolio}
                target="_blank"
                rel="noreferrer"
                className="cta-button"
              >
                Ver case no portfólio
              </a>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
