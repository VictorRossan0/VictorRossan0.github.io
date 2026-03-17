import { experiences } from "../data/experiences";

export function Experience() {
  return (
    <main className="container mt-5">
      <section className="content">
        <h2 className="text-center mb-5">Experiência Profissional</h2>

        {experiences.map((exp, index) => (
          <article
            key={index}
            className={`experience-card mb-5 p-4 ${
              index === 0 ? "highlight" : ""
            }`}
          >
            <header className="mb-3">
              <h3 className="mb-1">
                {exp.role}
              </h3>

              <p className="company mb-1">
                <strong>{exp.company}</strong> · {exp.type}
              </p>

              <p className="period mb-1">{exp.period}</p>
              <p className="location text-muted">{exp.location}</p>
            </header>

            {/* 🔥 STACK VISUAL PRIMEIRO */}
            <div className="tech-stack mb-3">
              {exp.stack.map((tech) => (
                <span key={tech} className="badge me-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>

            {/* 📋 DESCRIÇÃO */}
            <ul className="mb-0">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}