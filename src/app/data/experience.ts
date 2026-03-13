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
    company: "Tarmac",
    role: "Mid Software Developer",
    period: "Fev 2022 – Presente",
    description: "Pequena empresa internacional de software que entrega aplicações web para gestão de publicidade e certificação de funcionários.",
    contributions: [
      "Colaboração com clientes internacionais na coleta de requisitos e tradução em funcionalidades escaláveis",
      "Desenvolvimento e otimização de funcionalidades core com Ruby on Rails, PostgreSQL, ReactJS, ViteJS, VueJS e GraphQL",
      "Code reviews e adoção de boas práticas de performance, segurança e manutenibilidade",
      "Implementação de fluxos TDD com Cypress e RSpec, elevando cobertura de testes e reduzindo risco de regressão",
      "Integração com ElasticSearch, melhorando performance de busca e filtros em 40%",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "ReactJS", "ViteJS", "VueJS", "GraphQL", "Cypress", "RSpec", "ElasticSearch", "Docker"],
  },
  {
    company: "Pontomais",
    role: "Mid Software Developer",
    period: "Mai 2021 – Fev 2022",
    description: "HR-tech que constrói plataforma de folha de pagamento, controle de ponto e analytics de força de trabalho.",
    contributions: [
      "Liderança no desenvolvimento de novos módulos e correção de bugs críticos em codebase Ruby on Rails e AngularJS",
      "Orquestração de deploys semanais em AWS EC2, monitoramento com Sentry e garantia de 99,9% de uptime",
      "Design e padronização de APIs RESTful consumidas por clientes web e mobile",
      "Code reviews entre pares, incentivando adoção de clean code e princípios SOLID",
      "Escrita de suítes RSpec para proteção contra regressões",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "AngularJS", "Amazon EC2", "Sentry", "RSpec", "GitLab CI/CD"],
  },
  {
    company: "Tracking Trade",
    role: "Junior Software Developer",
    period: "Set 2019 – Mai 2021",
    description: "Startup de gestão de franquias com dashboards de business intelligence para clientes.",
    contributions: [
      "Contribuição no desenvolvimento de features em Ruby on Rails, com foco em visualização de dados e relatórios",
      "Manutenção de aplicações legadas, refatorando módulos-chave para performance e segurança",
      "Deploy e escala de serviços no Heroku, otimizando uso de dynos e entrega de assets",
      "Implementação de features no client com CoffeeScript e jQuery",
      "Estabelecimento de suítes de testes com RSpec, elevando cobertura automatizada para 85%",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Heroku", "CoffeeScript", "RSpec", "Redis", "Business Intelligence"],
  },
];

export const education = [
  { degree: "Análise e Desenvolvimento de Sistemas", institution: "Universidade Estácio de Sá", period: "2019 – Presente" },
  { degree: "Engenharia Civil", institution: "Universidade Maurício de Nassau", period: "2012 – 2017" },
];
