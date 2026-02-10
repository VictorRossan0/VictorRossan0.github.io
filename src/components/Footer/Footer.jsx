import { SocialLinks } from "../SocialLinks/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} Victor Rossano - Todos os direitos reservados.</p>
      <SocialLinks />
    </footer>
  );
}
