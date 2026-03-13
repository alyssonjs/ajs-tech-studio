import { Code2, Server, Layout, RefreshCw, GitBranch, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Desenvolvimento de Produtos",
    description: "Aplicações web completas para startups e empresas. Do conceito ao software pronto para produção.",
    details: [
      "Desenvolvimento full-stack de aplicações web",
      "Design e implementação de MVP",
      "Arquitetura de plataformas SaaS",
      "Iteração ágil de produto",
    ],
    icon: Code2,
  },
  {
    title: "Engenharia Backend com Rails",
    description: "APIs, regras de negócio, integrações e otimização de performance com Ruby on Rails.",
    details: [
      "Desenvolvimento de APIs RESTful e GraphQL",
      "Design e otimização de banco de dados",
      "Processamento de jobs em background",
      "Integrações com sistemas terceiros",
    ],
    icon: Server,
  },
  {
    title: "Frontend com Next.js / React",
    description: "Interfaces modernas, dashboards, portais e aplicações web com excelente experiência do usuário.",
    details: [
      "Aplicações React e Next.js",
      "Dashboards interativos",
      "UI responsiva e acessível",
      "Desenvolvimento de bibliotecas de componentes",
    ],
    icon: Layout,
  },
  {
    title: "Modernização de Sistemas",
    description: "Melhoria de sistemas legados, arquitetura e workflow de desenvolvimento para manutenibilidade a longo prazo.",
    details: [
      "Auditoria e avaliação de código",
      "Estratégia de refatoração incremental",
      "Melhoria de cobertura de testes",
      "Otimização de performance",
    ],
    icon: RefreshCw,
  },
  {
    title: "Arquitetura e Consultoria Técnica",
    description: "Liderança técnica, orientação de arquitetura e estratégia de execução de produto.",
    details: [
      "Design de arquitetura de sistemas",
      "Seleção de stack tecnológico",
      "Code review e boas práticas",
      "Planejamento de escalabilidade",
    ],
    icon: GitBranch,
  },
  {
    title: "Integrações e Automação",
    description: "ERPs, pagamentos, APIs, Open Finance e automação de workflows.",
    details: [
      "Integração com gateways de pagamento",
      "Conectores para sistemas ERP",
      "Automação de workflows",
      "Desenvolvimento de pipelines de dados",
    ],
    icon: Workflow,
  },
];
