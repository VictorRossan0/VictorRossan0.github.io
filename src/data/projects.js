// src/data/projects.js

export const projects = [
  {
    id: "gestao-atestados",
    title: "Sistema de Gestão de Atestados",
    problem:
      "Processo manual e descentralizado para envio e validação de atestados médicos, gerando retrabalho e risco de inconsistência de dados.",
    solution:
      "Desenvolvimento de sistema backend com Laravel para centralizar o envio, análise e aprovação de atestados, garantindo controle e rastreabilidade das informações.",
    result:
      "Melhoria na organização dos dados, redução de erros operacionais e maior eficiência no fluxo de validação.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Cadastro de atestados",
      "Aprovação e reprovação",
      "Armazenamento seguro"
    ]
  },

  {
    id: "web-scraping",
    title: "Automação de Coleta de Dados (Web Scraping)",
    problem:
      "Coleta manual de dados técnicos em múltiplas fontes, com alto tempo operacional e risco de inconsistência.",
    solution:
      "Desenvolvimento de robô em Python utilizando Selenium para automatizar a extração, validação e estruturação dos dados.",
    result:
      "Redução significativa do tempo de coleta e padronização das informações para integração com sistemas internos.",
    technologies: ["Python", "Selenium"],
    features: [
      "Coleta automatizada de dados",
      "Processamento e validação",
      "Integração com sistemas"
    ]
  },

  {
    id: "todo-list",
    title: "ToDo List",
    problem:
      "Dificuldade na organização e acompanhamento de tarefas do dia a dia.",
    solution:
      "Desenvolvimento de aplicação em React para gerenciamento de tarefas com foco em usabilidade e produtividade.",
    result:
      "Melhoria na organização pessoal e visualização clara das tarefas e prioridades.",
    technologies: ["React"],
    features: [
      "Criação de tarefas",
      "Marcação de tarefas concluídas",
      "Organização por prioridade"
    ]
  },

  /* =========================
     PROJETOS CORPORATIVOS
  ========================= */

  {
    id: "agilead-cnaes-estabelecimentos",
    title: "Agilead - CNAEs e Estabelecimentos",
    problem:
      "Dificuldade na consulta e organização de dados de CNAEs e estabelecimentos para análise administrativa.",
    solution:
      "Desenvolvimento de sistema com Laravel e API REST para centralizar e facilitar a consulta e análise dessas informações.",
    result:
      "Melhoria na tomada de decisão e organização de dados estratégicos.",
    technologies: ["Laravel", "MySQL", "API REST"],
    features: [
      "Consulta de CNAEs",
      "Gestão de estabelecimentos",
      "Organização e análise de dados"
    ]
  },

  {
    id: "leaderagro-controle-lavroura",
    title: "LeaderAgro - Controle de Lavoura",
    problem:
      "Falta de controle e organização das atividades agrícolas e dados produtivos.",
    solution:
      "Desenvolvimento de sistema para registro e acompanhamento de atividades agrícolas utilizando Laravel.",
    result:
      "Melhor organização das informações e suporte à tomada de decisão no campo.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Controle de lavouras",
      "Registro de atividades agrícolas",
      "Gestão de informações produtivas"
    ]
  },

  {
    id: "colegio-poiese-controle-escolar",
    title: "Colégio Poiése - Controle Escolar",
    problem:
      "Necessidade de controle seguro da entrada e saída de alunos.",
    solution:
      "Desenvolvimento de sistema para registro e validação de acesso de alunos com autorização de responsáveis.",
    result:
      "Aumento da segurança e rastreabilidade das informações escolares.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Controle de entrada e saída",
      "Validação por responsáveis",
      "Registro seguro de informações"
    ]
  },

  /* =========================
     PROJETO DESTAQUE (SaaS)
  ========================= */

  {
    id: "salomix-saas-gestao-saloes",
    title: "Salomix - SaaS de Gestão para Salões",
    problem:
      "Pequenos negócios possuem dificuldade em gerenciar operações, clientes e finanças de forma organizada e escalável.",
    solution:
      "Desenvolvimento de SaaS multi-tenant utilizando Lovable (React) e Supabase, com autenticação, isolamento de dados por empresa (Row Level Security) e controle de permissões.",
    result:
      "Estrutura escalável para múltiplos clientes, garantindo segurança e separação de dados com base sólida para crescimento do produto.",
    technologies: [
      "Lovable (React)",
      "Supabase",
      "PostgreSQL",
      "Row Level Security (RLS)",
      "Zustand",
      "React Query"
    ],
    features: [
      "Arquitetura SaaS multi-tenant",
      "Autenticação de usuários",
      "Isolamento de dados por empresa",
      "Controle de permissões",
      "Gestão de serviços e finanças"
    ]
  },

  /* =========================
     PROJETO ESTRATÉGICO (IA)
  ========================= */

  {
    id: "automacao-planejamento-diario",
    title: "Agente de Planejamento Diário com IA",
    problem:
      "Dificuldade em organizar atividades pessoais e profissionais com eventos recorrentes e variações semanais, gerando esquecimentos e falta de consistência.",
    solution:
      "Desenvolvimento de automação com n8n integrada ao Telegram para gerar um briefing diário inteligente, considerando regras condicionais como eventos quinzenais e compromissos fixos.",
    result:
      "Aumento de disciplina, redução de esquecimentos e visão clara das atividades diárias e semanais.",
    technologies: ["n8n", "Telegram Bot API", "JavaScript (Function Node)"],
    features: [
      "Geração automática de cronograma diário",
      "Substituição dinâmica de atividades (ex: futebol quinzenal)",
      "Envio de briefing formatado com ícones",
      "Lembretes automáticos de compromissos",
      "Regras condicionais baseadas em datas"
    ]
  },
  {
    id: "agente-financeiro-ia",
    title: "Agente Financeiro com IA via Telegram",
    problem:
      "Controle financeiro manual exige preenchimento de dados e organização constante, dificultando consistência e análise.",
    solution:
      "Criação de agente automatizado utilizando n8n e IA (Grok) para interpretar mensagens em linguagem natural, classificar transações e registrar automaticamente em base de dados.",
    result:
      "Automação completa do controle financeiro, com registro instantâneo, redução de esforço manual e acesso rápido a análises financeiras.",
    technologies: [
      "n8n",
      "Grok AI (xAI API)",
      "Google Sheets",
      "Telegram Bot API"
    ],
    features: [
      "Registro financeiro via linguagem natural",
      "Classificação automática de receitas e despesas",
      "Extração de dados estruturados",
      "Resumo financeiro por período",
      "Cálculo automático de saldo e categorias",
      "Identificação de usuário nas transações"
    ]
  }
];