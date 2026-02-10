// src/components/ProjectCard/ProjectCard.jsx
import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <div className="project card p-3 mb-4">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <Link to={`/projects/${project.id}`} className="btn btn-primary">
        Veja mais
      </Link>
    </div>
  );
}
