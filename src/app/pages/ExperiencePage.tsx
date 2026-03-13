import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { experiences, education } from "../data/experience";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerChild } from "../components/AnimatedSection";
import { HeroGradient } from "../components/GradientBackground";

export function ExperiencePage() {
  return (
    <div>
      <Helmet>
        <title>Experience | AJS Tech Studio</title>
        <meta name="description" content="6+ years building web applications. Tarmac, Pontomais, Tracking Trade. Ruby on Rails, React, Vue, GraphQL and product delivery." />
        <meta property="og:title" content="Experience | AJS Tech Studio" />
        <meta property="og:description" content="Professional experience in software development, Rails, React and product delivery." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Experiência</p>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}>
              Trajetória{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Profissional</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl mx-auto" style={{ fontSize: 17, lineHeight: 1.7 }}>
              6+ anos construindo aplicações web, com passagem por Tarmac, Pontomais e Tracking Trade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-12 bottom-12 w-px bg-gradient-to-b from-primary/30 via-border to-transparent hidden md:block" />

            <AnimatedStagger className="space-y-8">
              {experiences.map((exp, i) => (
                <AnimatedStaggerChild key={i}>
                  <div className="relative flex gap-6 md:gap-10">
                    {/* Node */}
                    <div className="hidden md:flex w-14 shrink-0 items-start justify-center pt-9">
                      <div className={`relative w-5 h-5 rounded-full border-[3px] ${
                        i === 0
                          ? 'border-primary bg-primary/20'
                          : 'border-border bg-white'
                      }`}>
                        {i === 0 && (
                          <motion.div
                            className="absolute inset-[-6px] rounded-full border-2 border-primary/20"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white border border-border/60 rounded-3xl p-8 md:p-9 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/15 transition-all group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                        <div>
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                              <Briefcase size={15} className="text-primary" />
                            </div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}>{exp.company}</h3>
                          </div>
                          <p className="text-primary ml-[42px]" style={{ fontSize: 14, fontWeight: 500 }}>{exp.role}</p>
                        </div>
                        <span className="bg-gradient-to-r from-primary/8 to-accent/8 text-primary px-4 py-1.5 rounded-full self-start border border-primary/10" style={{ fontSize: 13, fontWeight: 600 }}>
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>{exp.description}</p>

                      <div className="space-y-2.5 mb-6">
                        {exp.contributions.map((contrib, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent mt-2 shrink-0" />
                            <span className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.6 }}>{contrib}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span key={tech} className="bg-secondary text-muted-foreground px-3 py-1 rounded-lg" style={{ fontSize: 12, fontWeight: 500 }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedStaggerChild>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-primary mb-2" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Formação</p>
            <h2 style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }} className="mb-10">
              Educação
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white border border-border/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/15 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, fontFamily: "'Manrope', sans-serif" }}>{edu.degree}</h3>
                    <p className="text-muted-foreground mt-0.5" style={{ fontSize: 14 }}>{edu.institution}</p>
                    <p className="text-primary mt-1" style={{ fontSize: 13, fontWeight: 500 }}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent" />
        <div className="h-px absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <AnimatedSection className="relative max-w-3xl mx-auto text-center">
          <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }} className="mb-4">
            Quer ver meu trabalho{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">na prática?</span>
          </h2>
          <p className="text-muted-foreground mb-8" style={{ fontSize: 16 }}>
            Confira meus cases de projeto para exemplos detalhados.
          </p>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3.5 rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            Ver Projetos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
