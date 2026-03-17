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

        {/* 🔥 Problema */}
        <h3>Problema</h3>
        <p>{project.problem}</p>

        {/* 💡 Solução */}
        <h3>Solução</h3>
        <p>{project.solution}</p>

        {/* 📈 Resultado */}
        <h3>Resultado</h3>
        <p>{project.result}</p>

        {/* 🧠 Tecnologias */}
        <h3>Tecnologias Utilizadas</h3>
        <ul>
          {project.technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {/* ⚙️ Funcionalidades */}
        <h3>Principais Funcionalidades</h3>
        <ul>
          {project.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {/* 🔗 Links */}
        <div className="links mt-4">
          {project.github && (
            <a href={project.github} target="_blank">
              Ver código
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank">
              Ver projeto online
            </a>
          )}
        </div>
      </section>
    </main>
  );
}