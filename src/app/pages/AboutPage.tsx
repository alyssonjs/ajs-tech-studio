import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Code2, Server, Layout, Puzzle, Users, Lightbulb, Target, Zap } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerChild } from "../components/AnimatedSection";
import { HeroGradient, SectionGradient } from "../components/GradientBackground";

const philosophy = [
  { title: "Qualidade acima de velocidade", desc: "Código limpo, testado e manutenível. Atalhos de hoje se tornam dívida técnica amanhã." },
  { title: "Clareza na comunicação", desc: "Comunicação clara é tão importante quanto código limpo. Torno conceitos técnicos acessíveis para toda a equipe." },
  { title: "Pensamento orientado a produto", desc: "Cada linha de código tem um propósito. Decisões guiadas pelo impacto no negócio e valor para o usuário." },
  { title: "Melhoria contínua", desc: "Software nunca está finalizado. Melhorias incrementais, refatoração regular e boas práticas." },
];

const focusAreas = [
  { icon: Server, title: "Engenharia Backend", desc: "Ruby on Rails, APIs, lógica de negócio complexa e processamento de dados." },
  { icon: Layout, title: "Desenvolvimento Frontend", desc: "React, Next.js, UI moderna, dashboards e aplicações interativas." },
  { icon: Code2, title: "Arquitetura de Software", desc: "Design de sistemas escaláveis, microsserviços e tomada de decisões técnicas." },
  { icon: Puzzle, title: "Integrações e Automação", desc: "ERPs, sistemas de pagamento, APIs terceiras e automação de workflows." },
];

const workingStyle = [
  { icon: Users, title: "Colaborativo", desc: "Trabalho próximo das equipes, entendendo o contexto de negócio." },
  { icon: Lightbulb, title: "Visão de negócio", desc: "Decisões técnicas guiadas por objetivos de negócio e impacto mensurável." },
  { icon: Target, title: "Pragmático", desc: "Focado em entregar valor. Sem over-engineering ou complexidade desnecessária." },
  { icon: Zap, title: "Escalável", desc: "Construindo sistemas que funcionam hoje e crescem com seu negócio." },
];

export function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About | AJS Tech Studio</title>
        <meta name="description" content="Senior Full Stack Developer, 8+ years building web applications. Ruby on Rails, React/Next.js. Consulting and product development for modern businesses." />
        <meta property="og:title" content="About | AJS Tech Studio" />
        <meta property="og:description" content="Senior Full Stack Developer. Consulting and product development focused on quality, maintainability and business impact." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Sobre</p>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Construindo software{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">que importa</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl" style={{ fontSize: 18, lineHeight: 1.8 }}>
              Sou Desenvolvedor Full Stack Sênior com 8+ anos de experiência construindo aplicações web para startups, scale-ups e empresas enterprise. Minha stack principal é Ruby on Rails e React/Next.js, e me especializo em transformar requisitos complexos de negócio em software limpo, manutenível e escalável.
            </p>
            <p className="text-muted-foreground mt-4 max-w-3xl" style={{ fontSize: 18, lineHeight: 1.8 }}>
              Através da <span className="text-foreground" style={{ fontWeight: 600 }}>AJS Tech Studio</span>, ofereço serviços de consultoria e desenvolvimento focados em ajudar empresas a construir, modernizar e escalar seus produtos digitais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filosofia */}
      <section className="relative py-20 md:py-28 px-6">
        <SectionGradient variant="right" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-primary mb-2" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Filosofia</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }} className="mb-10">
              Como penso software
            </h2>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <AnimatedStaggerChild key={i}>
                <div className="relative bg-white border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/15 transition-all group h-full hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/15 to-accent/15 rounded-xl flex items-center justify-center mb-5">
                      <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent" style={{ fontSize: 16, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-2">{item.title}</h3>
                    <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Áreas de Foco */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent">
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-primary mb-2" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Especialidades</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }} className="mb-10">
              Áreas de foco
            </h2>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area, i) => (
              <AnimatedStaggerChild key={i}>
                <div className="bg-white border border-border/60 rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/15 transition-all group h-full hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <area.icon size={24} className="text-primary" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600 }} className="mb-2">{area.title}</h3>
                  <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.6 }}>{area.desc}</p>
                </div>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Estilo de Trabalho */}
      <section className="relative py-20 md:py-28 px-6">
        <SectionGradient variant="left" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-primary mb-2" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Estilo de Trabalho</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }} className="mb-10">
              Como eu trabalho
            </h2>
          </AnimatedSection>
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {workingStyle.map((item, i) => (
              <AnimatedStaggerChild key={i}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 600 }} className="mb-1.5">{item.title}</h4>
                    <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#0B1120]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <AnimatedSection className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-5" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}>
            Vamos construir algo{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">incrível juntos</span>
          </h2>
          <p className="text-white/50 mb-10" style={{ fontSize: 18 }}>
            Estou sempre interessado em novos desafios e oportunidades.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white px-9 py-4 rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            style={{ fontSize: 16, fontWeight: 600 }}
          >
            Entre em Contato <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
