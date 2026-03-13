export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string[];
  stack: string[];
  coverImage: string;
  featured: boolean;
  year: string;
  role: string;
  clientType: string;
  challenge: string;
  solution: string;
  responsibilities: string[];
  results: string[];
  /** URL do projeto em produção (ex.: Vercel). Exibe botão "Visitar site" na página do case. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "mercado-facil",
    title: "Mercado Fácil",
    subtitle: "Aplicação web em produção",
    summary: "Projeto full stack deployado na Vercel. Aplicação moderna com interface responsiva e experiência de uso fluida.",
    category: ["Plataforma Web", "E-commerce"],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
    year: "2025",
    role: "Desenvolvedor Full Stack",
    clientType: "Projeto próprio / Portfólio",
    challenge: "Construir uma aplicação web completa, com boa UX e deploy em produção, demonstrando domínio do ciclo completo de desenvolvimento.",
    solution: "Desenvolvimento da aplicação com React e Vite, estilização com Tailwind CSS e deploy automatizado na Vercel com URL pública e HTTPS.",
    responsibilities: ["Desenvolvimento frontend", "Configuração de build e deploy", "Interface responsiva e acessível"],
    results: ["Site em produção com URL pública", "Deploy contínuo na Vercel", "Projeto disponível como referência no portfólio"],
    liveUrl: "https://mercado-facil-mauve.vercel.app/",
  },
  {
    slug: "mercado-facil-saas",
    title: "Mercado Facil SaaS",
    subtitle: "Aplicação SaaS em produção",
    summary: "Versão SaaS do Mercado Fácil, deployada na Vercel. Plataforma web com foco em modelo de negócio software-as-a-service.",
    category: ["SaaS", "Plataforma Web"],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true,
    year: "2025",
    role: "Desenvolvedor Full Stack",
    clientType: "Projeto próprio / Portfólio",
    challenge: "Desenvolver e colocar no ar uma aplicação no modelo SaaS, com experiência consistente e deploy profissional.",
    solution: "Implementação da aplicação com stack moderna (React, Vite, TypeScript), estilização com Tailwind e publicação na Vercel com URL dedicada.",
    responsibilities: ["Desenvolvimento da aplicação", "Configuração e deploy na Vercel", "Interface e fluxos de uso"],
    results: ["Aplicação SaaS em produção", "URL pública e estável", "Projeto de referência no portfólio"],
    liveUrl: "https://mercado-facil-saas.vercel.app/",
  },
  {
    slug: "plataforma-pagamentos-fintech",
    title: "Plataforma de Pagamentos Fintech",
    subtitle: "Sistema completo de processamento de pagamentos",
    summary: "Construção de uma plataforma completa de processamento de pagamentos com milhares de transações diárias, reconciliação em tempo real e recursos de compliance.",
    category: ["Fintech", "SaaS"],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "Sidekiq", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1765226410758-9ae3d34cd791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGFzaGJvYXJkJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzczNDA2ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    year: "2024",
    role: "Desenvolvedor Full Stack Sênior",
    clientType: "Startup Fintech",
    challenge: "O cliente precisava de uma plataforma robusta de pagamentos capaz de lidar com alto volume de transações, mantendo conformidade com regulamentações financeiras. O sistema existente era monolítico, com gargalos de performance e escalabilidade limitada.",
    solution: "Projetei e implementei uma arquitetura modular usando Rails para a API backend e React para o dashboard. Implementei processamento orientado a eventos com Sidekiq para transações assíncronas, webhooks em tempo real e workflows de reconciliação automatizados.",
    responsibilities: ["Arquitetura backend e design de API", "Integrações com gateways de pagamento", "Processamento de transações em tempo real", "Otimização de banco de dados", "Implementação de segurança e compliance", "Setup de pipeline CI/CD"],
    results: ["99,9% de uptime alcançado", "3x mais rápido no processamento", "Redução de 80% na reconciliação manual", "Arquitetura escalável para 10x de crescimento"],
  },
  {
    slug: "plataforma-credenciais-saas",
    title: "Plataforma de Credenciais SaaS",
    subtitle: "Sistema de credenciamento e verificação digital",
    summary: "Desenvolvimento de uma plataforma SaaS escalável para emissão, gerenciamento e verificação de credenciais digitais utilizada por clientes enterprise no mundo todo.",
    category: ["SaaS", "Plataforma Web"],
    stack: ["Ruby on Rails", "React", "Next.js", "PostgreSQL", "AWS", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMzc5MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    year: "2023",
    role: "Desenvolvedor Full Stack Sênior",
    clientType: "SaaS Enterprise",
    challenge: "A plataforma precisava lidar com milhões de verificações de credenciais, oferecendo uma experiência fluida tanto para emissores quanto para beneficiários. Código legado e dívida técnica estavam desacelerando a entrega de features.",
    solution: "Liderei esforços de modernização incluindo refatoração de serviços core, melhoria de cobertura de testes e implementação de novas features. Construí dashboards React para gerenciamento de credenciais e introduzi otimizações de performance em toda a stack.",
    responsibilities: ["Desenvolvimento de features e melhorias de arquitetura", "Desenvolvimento de dashboards React", "Otimização de performance de API", "Integração com sistemas terceiros", "Code review e mentoria", "Automação de testes"],
    results: ["50% de melhoria no tempo de carregamento", "Cobertura de testes aumentada para 90%", "Redução de 60% no tempo de deploy", "Habilitação de novas features enterprise"],
  },
  {
    slug: "marketplace-ecommerce",
    title: "Marketplace E-commerce",
    subtitle: "Plataforma marketplace multi-vendedor",
    summary: "Construção de um marketplace multi-vendedor completo com gestão de estoque, processamento de pagamentos e rastreamento de pedidos em tempo real.",
    category: ["E-commerce", "Plataforma Web"],
    stack: ["Ruby on Rails", "React", "PostgreSQL", "Stripe", "Redis", "Elasticsearch"],
    coverImage: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzM0MDY4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    year: "2023",
    role: "Líder de Backend",
    clientType: "Empresa de E-commerce",
    challenge: "A empresa precisava migrar de uma loja de vendedor único para um marketplace multi-vendedor, mantendo as operações existentes e a experiência do cliente durante a migração.",
    solution: "Implementei uma estratégia de migração faseada com uma nova arquitetura multi-tenant. Construí fluxos de onboarding para vendedores, gestão de comissões e sistemas de pagamento automatizados usando Stripe Connect.",
    responsibilities: ["Design de arquitetura multi-tenant", "Sistema de pagamento e repasses", "Busca e filtros com Elasticsearch", "Portal de gestão de vendedores", "Workflows de fulfillment", "Otimização de performance"],
    results: ["Migração com zero downtime", "200+ vendedores no primeiro trimestre", "40% de aumento no catálogo", "Repasses de comissão automatizados"],
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard de Analytics",
    subtitle: "Plataforma de visualização de dados em tempo real",
    summary: "Design e construção de uma plataforma de analytics com insights de negócio em tempo real, dashboards customizáveis e relatórios automatizados.",
    category: ["Ferramentas Internas", "SaaS"],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "D3.js", "Docker"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MzMyODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
    year: "2024",
    role: "Desenvolvedor Full Stack",
    clientType: "Enterprise",
    challenge: "O cliente dependia de relatórios manuais em planilhas, o que era demorado e propenso a erros. Precisavam de uma plataforma centralizada para visualização de dados em tempo real e relatórios automatizados.",
    solution: "Construí uma aplicação Next.js com server-side rendering para performance otimizada. Implementei pipelines de dados em tempo real, gráficos interativos com D3.js e um construtor de dashboards drag-and-drop para relatórios customizados.",
    responsibilities: ["Arquitetura frontend com Next.js", "Visualizações de dados interativas", "Pipeline de dados em tempo real", "Construtor de dashboards customizáveis", "Geração automatizada de relatórios", "Autenticação e permissões"],
    results: ["Redução de 90% no tempo de relatórios", "Insights em tempo real para 500+ usuários", "Dashboards customizáveis em todos os departamentos", "Eliminação de erros de entrada manual"],
  },
  {
    slug: "hub-integracao-erp",
    title: "Hub de Integração ERP",
    subtitle: "Plataforma de integração de sistemas enterprise",
    summary: "Criação de um hub centralizado conectando múltiplos sistemas ERP, automatizando fluxos de dados e reduzindo entrada manual entre departamentos.",
    category: ["Ferramentas Internas", "Consultoria"],
    stack: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "REST APIs", "Docker", "RabbitMQ"],
    coverImage: "https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc3MzM0NTg1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false,
    year: "2022",
    role: "Desenvolvedor Backend & Arquiteto",
    clientType: "Indústria",
    challenge: "Múltiplos sistemas desconectados entre departamentos geravam inconsistências de dados, duplicação de entrada manual e atraso nos relatórios. A empresa precisava de uma camada de integração unificada.",
    solution: "Projetei um hub de integração orientado a eventos usando Rails e RabbitMQ para processamento confiável de mensagens. Construí adaptadores para cada sistema ERP e implementei pipelines de transformação de dados com tratamento de erros abrangente.",
    responsibilities: ["Design de arquitetura de integração", "Adaptadores para sistemas ERP", "Mensageria orientada a eventos", "Pipelines de transformação de dados", "Tratamento de erros e monitoramento", "Documentação e treinamento"],
    results: ["Eliminação de 95% da entrada manual", "Sincronização de dados em tempo real", "Inconsistências de dados reduzidas a quase zero", "Economia de 40+ horas semanais"],
  },
];

export const categories = [
  "Todos",
  "SaaS",
  "Fintech",
  "E-commerce",
  "Ferramentas Internas",
  "Plataforma Web",
  "Consultoria",
];
