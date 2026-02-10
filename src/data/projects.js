// src/data/projects.js
export const projects = [
  {
    id: "gestao-atestados",
    title: "Sistema de Gestão de Atestados",
    description: "Aplicação para gerenciamento de atestados médicos.",
    longDescription:
      "Sistema desenvolvido para cadastro, análise e aprovação de atestados médicos por colaboradores e supervisores, com foco em segurança e controle de informações sensíveis.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Cadastro de atestados",
      "Aprovação e reprovação",
      "Armazenamento seguro"
    ]
  },
  {
    id: "web-scraping",
    title: "Ferramenta de Web Scraping",
    description: "Automação de coleta de dados usando Python.",
    longDescription:
      "Ferramenta desenvolvida para coleta automatizada de dados em Fichas Técnicas dos CIRs, com processamento e organização das informações para integração com outros sistemas.",
    technologies: ["Python", "Selenium"],
    features: [
      "Coleta automatizada de dados",
      "Processamento e validação",
      "Integração com WF"
    ]
  },
  {
    id: "todo-list",
    title: "ToDo List",
    description: "Aplicação interativa para controle de tarefas.",
    longDescription:
      "Aplicação desenvolvida em React para criação, organização e acompanhamento de tarefas, com foco em usabilidade e produtividade.",
    technologies: ["React"],
    features: [
      "Criação de tarefas",
      "Marcação de tarefas concluídas",
      "Organização por prioridade"
    ]
  },

  /* =========================
     NOVOS PRODUTOS
  ========================= */

  {
    id: "agilead-cnaes-estabelecimentos",
    title: "Agilead - CNAEs e Estabelecimentos",
    description: "Plataforma para consulta de CNAEs e respectivos Estabelecimentos.",
    longDescription:
      "Sistema corporativo desenvolvido para facilitar a consulta, organização e análise de CNAEs e dados de estabelecimentos, auxiliando decisões administrativas e estratégicas.",
    technologies: ["Laravel", "MySQL", "API REST"],
    features: [
      "Consulta de CNAEs",
      "Gestão de estabelecimentos",
      "Organização e análise de dados"
    ]
  },
  {
    id: "leaderagro-controle-lavroura",
    title: "LeaderAgro - Controle de Lavroura",
    description: "Sistema para gestão e controle de lavouras agrícolas.",
    longDescription:
      "Ferramenta desenvolvida para controle de lavouras, permitindo o acompanhamento de atividades agrícolas, organização de dados produtivos e suporte à tomada de decisão no campo.",
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
    description: "Sistema de controle de entrada e saída de alunos.",
    longDescription:
      "Plataforma escolar desenvolvida para controle de entrada e saída de alunos, garantindo segurança e rastreabilidade das informações, com validação por responsáveis.",
    technologies: ["Laravel", "MySQL"],
    features: [
      "Controle de entrada e saída",
      "Validação por responsáveis",
      "Registro seguro de informações"
    ]
  }
];
