// src/pages/Contact.jsx
export function Contact() {
    return (
        <main className="container mt-5">
            <section className="content text-center">
                <h2>Contato</h2>

                <p>
                    Quer conversar sobre oportunidades, projetos ou trocar uma ideia?
                    Me chama em qualquer um dos canais abaixo 👇
                </p>

                <div className="contact-links">
                    <a
                        href="mailto:victorrca2010@gmail.com"
                        className="cta-button"
                    >
                        📧 Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/victor-rossano-009b4556/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        💼 LinkedIn
                    </a>

                    <a
                        href="https://github.com/VictorRossan0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        🧑‍💻 GitHub
                    </a>

                    <a
                        href="https://wa.me/5519997394946?text=Olá%20Victor!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        💬 WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
