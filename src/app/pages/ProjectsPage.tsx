import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects, categories } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";
import { HeroGradient } from "../components/GradientBackground";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div>
      <Helmet>
        <title>Projects | AJS Tech Studio</title>
        <meta name="description" content="Case studies and projects: fintech, SaaS, e-commerce, internal tools. Real results and technical expertise." />
        <meta property="og:title" content="Projects | AJS Tech Studio" />
        <meta property="og:description" content="Case studies and projects demonstrating problem-solving, technical expertise and measurable results." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Portfólio</p>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}>
              Projetos &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cases</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-xl mx-auto" style={{ fontSize: 17, lineHeight: 1.7 }}>
              Projetos reais que demonstram resolução de problemas, expertise técnica e resultados mensuráveis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Filtros */}
          <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-xl border transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white border-primary shadow-lg shadow-primary/15"
                    : "border-border/60 text-muted-foreground hover:border-primary/30 hover:text-foreground bg-white"
                }`}
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group relative bg-white border border-border/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/8 transition-all hover:-translate-y-1 block h-full"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50" style={{ fontSize: 12, fontWeight: 500 }}>
                        {project.year}
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category.map((cat) => (
                          <span key={cat} className="bg-gradient-to-r from-primary/8 to-accent/8 text-primary px-3 py-0.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 600, fontFamily: "'Manrope', sans-serif" }} className="mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground/70 mb-3" style={{ fontSize: 14 }}>{project.subtitle}</p>
                      <p className="text-muted-foreground mb-5" style={{ fontSize: 14, lineHeight: 1.6 }}>{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span key={tech} className="bg-secondary text-muted-foreground px-2.5 py-0.5 rounded-lg" style={{ fontSize: 12 }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-primary group-hover:gap-3 transition-all" style={{ fontSize: 14, fontWeight: 600 }}>
                        Ver Case <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
