import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Lightbulb, Server, Layout, Puzzle, ChevronRight, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerChild } from "../components/AnimatedSection";
import { HeroGradient, SectionGradient } from "../components/GradientBackground";

const techStack = [
  "Ruby on Rails", "Next.js", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "APIs", "Integrações IA",
];

const servicesPreview = [
  { icon: Lightbulb, title: "Desenvolvimento de Produtos", desc: "Aplicações web completas para startups e empresas, do conceito à produção." },
  { icon: Server, title: "Modernização", desc: "Melhoria de sistemas legados, arquitetura e workflow de desenvolvimento." },
  { icon: Layout, title: "Consultoria", desc: "Liderança técnica, orientação de arquitetura e execução de produto." },
  { icon: Puzzle, title: "Integrações", desc: "APIs, automações, sistemas financeiros e fluxos de dados." },
];

const differentials = [
  { title: "Mentalidade orientada a produto", desc: "Penso além do código. Cada decisão técnica é guiada pelo impacto no negócio e valor para o usuário." },
  { title: "Base sólida de backend", desc: "Expertise profunda em Ruby on Rails, APIs e lógica de negócio complexa." },
  { title: "Frontend moderno", desc: "React e Next.js para interfaces rápidas, acessíveis e bonitas." },
  { title: "Arquitetura pragmática", desc: "Soluções escaláveis sem over-engineering. Feito para hoje, pronto para amanhã." },
];

const stats = [
  { value: 6, suffix: "+", label: "Anos de experiência" },
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 15, suffix: "+", label: "Clientes enterprise" },
  { value: 99, suffix: "%", label: "Satisfação dos clientes" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent" style={{ fontSize: 44, fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1 }}>
        {count}{suffix}
      </span>
    </div>
  );
}

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div>
      <Helmet>
        <title>AJS Tech Studio | Software Consulting &amp; Product Development</title>
        <meta name="description" content="Building scalable software for modern businesses. Ruby on Rails, Next.js and product-focused consulting for companies building, modernizing or scaling digital platforms." />
        <meta property="og:title" content="AJS Tech Studio | Software Consulting &amp; Product Development" />
        <meta property="og:description" content="Building scalable software for modern businesses. Ruby on Rails, Next.js and product-focused consulting." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden" onMouseMove={handleMouseMove}>
        <HeroGradient />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/15 text-primary px-4 py-1.5 rounded-full mb-8"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                <Sparkles size={14} />
                Disponível para novos projetos
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-foreground mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.08, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}
              >
                Construindo{" "}
                <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                  software escalável
                </span>{" "}
                para empresas modernas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-muted-foreground max-w-lg mb-10"
                style={{ fontSize: 18, lineHeight: 1.7 }}
              >
                Ruby on Rails, Next.js e consultoria focada em produto para empresas que estão construindo, modernizando ou escalando plataformas digitais.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-7 py-3.5 rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                  style={{ fontSize: 15, fontWeight: 600 }}
                >
                  Ver Projetos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-border text-foreground px-7 py-3.5 rounded-2xl hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all hover:-translate-y-0.5"
                  style={{ fontSize: 15, fontWeight: 600 }}
                >
                  Fale Comigo
                </Link>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative bg-white/60 backdrop-blur-sm border border-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl p-7 group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all ${i % 2 === 1 ? 'mt-8' : ''}`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-muted-foreground mt-1.5" style={{ fontSize: 14 }}>{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative border-y border-border/50 bg-gradient-to-r from-secondary/30 via-white to-secondary/30 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-center text-muted-foreground/50 mb-6" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Tecnologias que utilizo
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-muted-foreground/50 hover:text-primary transition-colors cursor-default"
                  style={{ fontSize: 14, fontWeight: 500 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Serviços */}
      <section className="relative py-24 md:py-32 px-6">
        <SectionGradient variant="right" />
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>O Que Faço</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }}>
              Serviços sob medida para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">suas necessidades</span>
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((svc) => (
              <AnimatedStaggerChild key={svc.title}>
                <div className="relative bg-white border border-border/60 rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group h-full hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-13 h-13 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svc.icon size={24} className="text-primary" />
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600 }} className="mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.6 }}>{svc.desc}</p>
                  </div>
                </div>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-primary hover:gap-3 transition-all group" style={{ fontSize: 14, fontWeight: 600 }}>
              Ver Todos os Serviços <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent">
        <SectionGradient variant="left" />
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Portfólio</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }}>
              Projetos em{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Destaque</span>
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <AnimatedStaggerChild key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative bg-white border border-border/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/8 transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <ImageWithFallback
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.category.map((cat) => (
                        <span key={cat} className="bg-gradient-to-r from-primary/8 to-accent/8 text-primary px-3 py-0.5 rounded-full" style={{ fontSize: 12, fontWeight: 500 }}>
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600 }} className="mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: 14, lineHeight: 1.6 }}>{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-secondary text-muted-foreground px-2.5 py-0.5 rounded-lg" style={{ fontSize: 12 }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedStaggerChild>
            ))}
          </AnimatedStagger>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-primary hover:gap-3 transition-all group" style={{ fontSize: 14, fontWeight: 600 }}>
              Ver Todos os Projetos <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-24 md:py-32 px-6">
        <SectionGradient variant="center" />
        <div className="relative max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Diferenciais</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.01em" }}>
              Por que trabalhar{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">comigo</span>
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentials.map((diff, i) => (
              <AnimatedStaggerChild key={i}>
                <div className="relative bg-white border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group hover:-translate-y-1 h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl flex items-center justify-center mb-5">
                      <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent" style={{ fontSize: 20, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-2">{diff.title}</h3>
                    <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.7 }}>{diff.desc}</p>
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
        <motion.div
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(29,78,216,0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-[200px] h-[200px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <AnimatedSection className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-5" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}>
            Precisa de ajuda para construir ou{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">evoluir seu produto?</span>
          </h2>
          <p className="text-white/50 mb-10" style={{ fontSize: 18, lineHeight: 1.6 }}>
            Vamos conversar sobre o seu próximo projeto.
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
