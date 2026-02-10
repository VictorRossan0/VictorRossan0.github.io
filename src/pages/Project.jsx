import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <p className="text-center mt-5">Projeto não encontrado.</p>;
  }

  return (
    <main className="container mt-5">
      <section className="content">
        <h2>{project.title}</h2>

        <p>{project.longDescription}</p>

        <h3>Tecnologias Utilizadas</h3>
        <ul>
          {project.technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <h3>Principais Funcionalidades</h3>
        <ul>
          {project.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
