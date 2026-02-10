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
        <section className="content">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <ul>
                <li>
                    <strong>Tecnologias:</strong> {project.tech.join(", ")}
                </li>
            </ul>

            <div className="project-links">
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Repositório
                    </a>
                )}

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Demo
                    </a>
                )}
            </div>
        </section>
    );
}
