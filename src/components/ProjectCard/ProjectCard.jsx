import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <div className="project card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      {project.techs && (
        <div className="tech-stack">
          {project.techs.map((tech, index) => (
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