import { SocialLinks } from "../SocialLinks/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {year} Victor Rossano. Desenvolvedor Backend focado em APIs,
          automação e soluções escaláveis.
        </p>

        <SocialLinks />

        <p className="footer-note">
          Construído com React.js • Sempre em evolução 🚀
        </p>
      </div>
    </footer>
  );
}