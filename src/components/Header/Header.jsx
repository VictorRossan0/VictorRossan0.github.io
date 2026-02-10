import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="container">
        <NavLink to="/" className="company-name">
          Victor Rossano
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink to="/experience">
              Experiência
            </NavLink>
          </li>

          <li>
            <NavLink to="/work">
              Projetos
            </NavLink>
          </li>


          <li className="resume-wrapper">
            <a
              href="/Curriculo_Victor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Currículo
            </a>

            <a
              href="/Curriculo_Victor.pdf"
              download
              className="resume-download"
              title="Baixar currículo"
            >
              ⬇
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
