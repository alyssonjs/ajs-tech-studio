import { useParams, Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerChild } from "../components/AnimatedSection";
import { HeroGradient } from "../components/GradientBackground";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-32 text-center px-6">
        <h1 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}>Projeto não encontrado</h1>
        <Link to="/projects" className="text-primary mt-4 inline-flex items-center gap-1" style={{ fontSize: 14, fontWeight: 600 }}>
          <ArrowLeft size={16} /> Voltar para Projetos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{project.title} | AJS Tech Studio</title>
        <meta name="description" content={project.summary} />
        <meta property="og:title" content={`${project.title} | AJS Tech Studio`} />
        <meta property="og:description" content={project.summary} />
      </Helmet>
      {/* Hero */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary mb-8 transition-colors group" style={{ fontSize: 14, fontWeight: 500 }}>
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para Projetos
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.category.map((cat) => (
                <span key={cat} className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3.5 py-1 rounded-full border border-primary/15" style={{ fontSize: 13, fontWeight: 500 }}>
                  {cat}
                </span>
              ))}
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {project.title}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-3xl" style={{ fontSize: 18, lineHeight: 1.7 }}>
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-6 mt-7">
              {[
                { label: "Função", value: project.role },
                { label: "Ano", value: project.year },
                { label: "Cliente", value: project.clientType },
              ].map((item) => (
                <div key={item.label} className="bg-white/60 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5">
                  <p className="text-muted-foreground" style={{ fontSize: 12, fontWeight: 500 }}>{item.label}</p>
                  <p className="text-foreground" style={{ fontSize: 14, fontWeight: 600 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cover Image */}
      <AnimatedSection className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/5">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Content */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Desafio */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-primary" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>O Desafio</p>
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-5">Problema</h2>
                <p className="text-muted-foreground" style={{ fontSize: 16, lineHeight: 1.9 }}>{project.challenge}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Solução */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-primary" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>A Solução</p>
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-5">Abordagem</h2>
                <p className="text-muted-foreground" style={{ fontSize: 16, lineHeight: 1.9 }}>{project.solution}</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Responsabilidades */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-primary" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Minha Atuação</p>
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-5">Responsabilidades</h2>
                <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.responsibilities.map((resp, i) => (
                    <AnimatedStaggerChild key={i}>
                      <div className="flex items-start gap-3 bg-white border border-border/60 rounded-xl p-4 hover:border-primary/20 hover:shadow-md transition-all">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                        <span style={{ fontSize: 14, lineHeight: 1.5 }}>{resp}</span>
                      </div>
                    </AnimatedStaggerChild>
                  ))}
                </AnimatedStagger>
              </div>
            </div>
          </AnimatedSection>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Stack */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-primary" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Tecnologia</p>
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-5">Stack Tecnológica</h2>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-white border border-border/60 px-5 py-2.5 rounded-xl hover:border-primary/30 hover:shadow-md transition-all cursor-default" style={{ fontSize: 14, fontWeight: 500 }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Resultados */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="text-primary" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Impacto</p>
              </div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-5">Resultados</h2>
                <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result, i) => (
                    <AnimatedStaggerChild key={i}>
                      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-6 hover:shadow-md transition-all">
                        <p className="text-foreground" style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{result}</p>
                      </div>
                    </AnimatedStaggerChild>
                  ))}
                </AnimatedStagger>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent" />
        <div className="h-px absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <AnimatedSection className="relative max-w-3xl mx-auto text-center">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3.5 rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5 mb-6"
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              Visitar site <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
          <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }} className="mb-4">
            Interessado em construir algo{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">similar?</span>
          </h2>
          <p className="text-muted-foreground mb-8" style={{ fontSize: 16 }}>
            Vamos conversar sobre como posso ajudar no seu projeto.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3.5 rounded-2xl hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Entre em Contato <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
