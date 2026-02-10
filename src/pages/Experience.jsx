import { experiences } from "../data/experiences";

export function Experience() {
  return (
    <main className="container mt-5">
      <section className="content">
        <h2 className="text-center mb-4">Experiência Profissional</h2>

        {experiences.map((exp, index) => (
          <article key={index} className="experience-card mb-5">
            <header>
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} · {exp.type}
              </p>
              <p className="period">{exp.period}</p>
              <p className="location">{exp.location}</p>
            </header>

            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {exp.stack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
