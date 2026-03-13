export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tarmac / Credly",
    role: "Desenvolvedor Full Stack Sênior",
    period: "2022 - Presente",
    description: "Atuação em uma plataforma de credenciamento digital de grande escala atendendo clientes enterprise no mundo todo. Foco em serviços backend Rails, frontends React e melhorias de arquitetura.",
    contributions: [
      "Liderou melhorias de arquitetura no sistema core de emissão de credenciais",
      "Construiu dashboards React para gerenciamento de credenciais",
      "Otimizou performance de API reduzindo tempo de resposta em 50%",
      "Mentorou desenvolvedores juniores e conduziu code reviews",
      "Implementou testes automatizados aumentando cobertura para 90%",
    ],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "AWS", "Docker", "RSpec"],
  },
  {
    company: "Startup Fintech",
    role: "Desenvolvedor Backend Sênior",
    period: "2020 - 2022",
    description: "Construção e escala de infraestrutura de processamento de pagamentos para uma fintech em crescimento. Design de arquitetura orientada a eventos para processamento de transações em tempo real.",
    contributions: [
      "Projetou arquitetura de processamento de pagamentos do zero",
      "Implementou sistema de reconciliação de transações em tempo real",
      "Construiu integrações com múltiplos gateways de pagamento",
      "Reduziu tempo de processamento de transações em 3x",
      "Estabeleceu pipelines CI/CD e automação de deploy",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "Docker", "Stripe"],
  },
  {
    company: "Consultoria de Software",
    role: "Desenvolvedor Full Stack",
    period: "2018 - 2020",
    description: "Entrega de aplicações web para clientes diversos incluindo plataformas de e-commerce, ferramentas internas e produtos SaaS. Atuação em toda a stack com foco em Rails e React.",
    contributions: [
      "Entregou 10+ projetos no prazo e dentro do orçamento",
      "Construiu marketplace multi-vendedor do zero",
      "Implementou sistemas de integração ERP para clientes enterprise",
      "Introduziu práticas de testes automatizados nos projetos",
      "Colaborou diretamente com clientes em requisitos e entregas",
    ],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "JavaScript", "REST APIs", "Heroku"],
  },
  {
    company: "Agência de Tecnologia",
    role: "Desenvolvedor Júnior / Pleno",
    period: "2016 - 2018",
    description: "Início da carreira profissional construindo aplicações web e aprendendo boas práticas de engenharia de software em um ambiente ágil.",
    contributions: [
      "Desenvolveu e manteve múltiplas aplicações web para clientes",
      "Aprendeu Ruby on Rails e desenvolvimento frontend moderno",
      "Participou de sprints ágeis e colaboração em equipe",
      "Contribuiu para ferramentas internas e melhorias de processos",
    ],
    stack: ["Ruby on Rails", "JavaScript", "jQuery", "PostgreSQL", "HTML/CSS", "Git"],
  },
];
