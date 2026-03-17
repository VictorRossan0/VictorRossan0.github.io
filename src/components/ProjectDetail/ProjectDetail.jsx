import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export function ProjectDetail() {
    const { id } = useParams();

    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <section className="content">
                <h2>Projeto não encontrado</h2>
                <p>O projeto que você tentou acessar não existe.</p>
            </section>
        );
    }

    return (
        <section className="content project-detail">
            <h2>{project.title}</h2>

            <p className="project-description">{project.description}</p>

            {project.problem && (
                <div className="project-section">
                    <h3>Problema</h3>
                    <p>{project.problem}</p>
                </div>
            )}

            {project.solution && (
                <div className="project-section">
                    <h3>Solução</h3>
                    <p>{project.solution}</p>
                </div>
            )}

            {project.tech && (
                <div className="project-section">
                    <h3>Tecnologias</h3>
                    <div className="tech-stack">
                        {project.tech.map((tech, index) => (
                            <span key={index} className="badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="project-links">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Ver código
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Ver projeto
                    </a>
                )}
            </div>
        </section>
    );
}