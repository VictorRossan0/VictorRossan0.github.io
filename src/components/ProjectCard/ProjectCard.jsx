import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <div className="project card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>
          <strong>Problema:</strong> {project.problem}
        </p>

        <p>
          <strong>Solução:</strong> {project.solution}
        </p>

        <p>
          <strong>Resultado:</strong> {project.result}
        </p>
      </div>

      {project.technologies && (
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      <Link to={`/projects/${project.id}`} className="btn">
        Ver detalhes →
      </Link>
    </div>
  );
}
