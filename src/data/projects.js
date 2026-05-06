// src/data/projects.js

export const projects = [
  {
    id: "betanalytics",
    title: "BetAnalytics — Plataforma de Dados do Brasileirão",
    problem:
      "Necessidade de centralizar e analisar dados do Brasileirão Série A por rodada, incluindo resultados, escanteios, cartões e métricas esportivas.",
    solution:
      "Desenvolvimento de uma plataforma web com dashboards, filtros e estrutura de dados para acompanhamento estatístico do campeonato.",
    result:
      "Organização dos dados esportivos em uma interface visual, facilitando análise por rodada e evolução futura do projeto.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "n8n"],
    features: [
      "Dashboard de dados esportivos",
      "Análise por rodada",
      "Estruturação de dados no Supabase",
      "Filtros e visualização de métricas",
      "Base preparada para automações futuras"
    ],
    links: {
      demo: "https://analyticsbrasileirao.lovable.app/",
      github: "https://github.com/VictorRossan0/bet-insights-hub"
    }
  },

  {
    id: "gestao-atestados",
    title: "Sistema de Gestão de Atestados",
    problem:
      "Processo manual e descentralizado para envio, validação e controle de atestados médicos, gerando retrabalho e risco de inconsistência.",
    solution:
      "Desenvolvimento de sistema web em Laravel para centralizar cadastro, análise, aprovação/reprovação, upload de documentos e controle por perfis.",
    result:
      "Melhoria na organização das informações, redução de erros operacionais e maior rastreabilidade no fluxo de validação.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Laravel Sanctum"],
    features: [
      "Cadastro de atestados",
      "Aprovação e reprovação",
      "Upload de documentos",
      "Controle de perfis",
      "Análise de absenteísmo"
    ],
    links: {
      portfolio: "https://victorrossano-dev.netlify.app/projects/gestao-atestados",
      github: "https://github.com/VictorRossan0/gestao_atestados"
    }
  },

  {
    id: "agilead-cnaes-estabelecimentos",
    title: "Agilead — CNAEs e Estabelecimentos",
    problem:
      "Dificuldade na consulta, filtragem e organização de dados empresariais para análise de mercado e geração de leads.",
    solution:
      "Desenvolvimento de dashboard em Laravel com filtros por CNAE, estado e município, integrando dados empresariais para apoiar prospecção e análise.",
    result:
      "Consulta mais rápida e organizada de estabelecimentos, com filtros dinâmicos e visualização estruturada para tomada de decisão.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "APIs REST"],
    features: [
      "Dashboard de estabelecimentos",
      "Filtros por CNAE, estado e município",
      "Onboarding com preferências",
      "Paginação de resultados",
      "Estrutura preparada para integrações"
    ],
    links: {
      demo: "https://rdmti.com.br/agilead/login",
      portfolio:
        "https://victorrossano-dev.netlify.app/projects/agilead-cnaes-estabelecimentos"
    }
  },

  {
    id: "nba-data-scraping-pipeline",
    title: "NBA Data Scraping Pipeline",
    problem:
      "Coleta manual de estatísticas esportivas da NBA em diferentes fontes, dificultando análise e consolidação dos dados.",
    solution:
      "Criação de pipeline em Python para extração automatizada, processamento e consolidação de estatísticas em planilhas Excel.",
    result:
      "Automação da coleta e organização de dados esportivos, gerando arquivos estruturados para análise.",
    technologies: ["Python", "Selenium", "OpenPyXL", "Pandas", "Web Scraping"],
    features: [
      "Coleta automatizada de dados",
      "Processamento de estatísticas",
      "Geração de planilhas Excel",
      "Consolidação em múltiplas abas",
      "Estrutura modular em Python"
    ],
    links: {
      github: "https://github.com/VictorRossan0/nba-data-scraping-pipeline"
    }
  },

  {
    id: "automacao-planejamento-diario",
    title: "Agente de Planejamento Diário com IA",
    problem:
      "Dificuldade em organizar atividades pessoais e profissionais com eventos recorrentes e variações semanais.",
    solution:
      "Desenvolvimento de automação com n8n integrada ao Telegram para gerar briefing diário inteligente com regras condicionais.",
    result:
      "Melhoria na organização da rotina, redução de esquecimentos e visão clara das atividades diárias.",
    technologies: ["n8n", "Telegram Bot API", "JavaScript", "IA"],
    features: [
      "Briefing diário automatizado",
      "Regras condicionais por data",
      "Envio via Telegram",
      "Organização de rotina",
      "Automação com IA"
    ]
  },

  {
    id: "agente-financeiro-ia",
    title: "Agente Financeiro com IA via Telegram",
    problem:
      "Controle financeiro manual exige preenchimento constante e dificulta organização das informações.",
    solution:
      "Criação de agente automatizado com n8n e IA para interpretar mensagens em linguagem natural, classificar transações e registrar dados.",
    result:
      "Redução do esforço manual no controle financeiro e maior rapidez no registro de receitas e despesas.",
    technologies: ["n8n", "Grok AI", "Google Sheets", "Telegram Bot API"],
    features: [
      "Registro financeiro por linguagem natural",
      "Classificação automática de transações",
      "Integração com Google Sheets",
      "Resumo financeiro por período",
      "Automação via Telegram"
    ]
  }
];
