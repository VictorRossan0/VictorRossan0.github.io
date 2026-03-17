export function Contact() {
    return (
        <main className="container mt-5">
            <section className="content text-center">
                <h2 className="mb-3">Vamos conversar sobre seu projeto</h2>

                <p className="mb-4">
                    Estou aberto a oportunidades como Desenvolvedor Backend e projetos
                    envolvendo automação, integrações e IA.
                </p>

                <p className="mb-5">
                    Se você quer otimizar processos, integrar sistemas ou construir algo
                    escalável, me chama 👇
                </p>

                <p className="text-muted mb-4">
                    Respondo geralmente em até 24h 🚀
                </p>

                <p className="mb-4">
                    💡 Especializado em APIs, automações e sistemas escaláveis com foco em negócio.
                </p>

                <div className="contact-links d-flex flex-column align-items-center gap-3">
                    <a
                        href="mailto:victorrca2010@gmail.com"
                        className="cta-button primary"
                    >
                        📧 Enviar Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/victor-rossano-009b4556/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        💼 Falar no LinkedIn
                    </a>

                    <a
                        href="https://github.com/VictorRossan0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        🧑‍💻 Ver GitHub
                    </a>

                    <a
                        href="https://wa.me/5519997394946?text=Olá%20Victor!%20Vi%20seu%20portfólio%20e%20tenho%20interesse%20em%20um%20projeto%20ou%20oportunidade."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button whatsapp"
                    >
                        💬 Chamar no WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}