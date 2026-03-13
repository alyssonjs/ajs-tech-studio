import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { services } from "../data/services";
import { AnimatedSection, AnimatedStagger, AnimatedStaggerChild } from "../components/AnimatedSection";
import { HeroGradient } from "../components/GradientBackground";

export function ServicesPage() {
  return (
    <div>
      <Helmet>
        <title>Services | AJS Tech Studio</title>
        <meta name="description" content="Product development, Rails backend, Next.js/React frontend, legacy modernization, technical consulting, and integrations. Clear consulting for digital products." />
        <meta property="og:title" content="Services | AJS Tech Studio" />
        <meta property="og:description" content="Product development, backend and frontend engineering, architecture and integrations for modern businesses." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Serviços</p>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Consultoria técnica clara para{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">produtos digitais</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl mx-auto" style={{ fontSize: 18, lineHeight: 1.7 }}>
              Ajudo empresas a construir, melhorar e escalar aplicações web com foco em qualidade, manutenibilidade e impacto no negócio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Serviços */}
      <section className="pb-24 md:pb-32 px-6">
        <AnimatedStagger className="max-w-5xl mx-auto space-y-6">
          {services.map((svc, i) => (
            <AnimatedStaggerChild key={i}>
              <div className="relative bg-white border border-border/60 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/15 transition-all group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col md:flex-row md:items-start gap-7">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svc.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground mb-6" style={{ fontSize: 16, lineHeight: 1.7 }}>{svc.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 bg-gradient-to-br from-primary/15 to-accent/15 rounded-md flex items-center justify-center shrink-0">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-muted-foreground" style={{ fontSize: 14 }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
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
          className="absolute top-10 right-20 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(29,78,216,0.15) 0%, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <AnimatedSection className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-5" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, fontFamily: "'Manrope', sans-serif", letterSpacing: "-0.02em" }}>
            Pronto para começar{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">seu projeto?</span>
          </h2>
          <p className="text-white/50 mb-10" style={{ fontSize: 18 }}>
            Me conte sobre suas necessidades e vamos encontrar a melhor abordagem juntos.
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
