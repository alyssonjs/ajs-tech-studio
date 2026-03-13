import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { Github, Linkedin, Mail, Send, FileText, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { HeroGradient } from "../components/GradientBackground";
import { siteLinks, formspreeFormId } from "../lib/siteLinks";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get("submitted") === "1") setSubmitted(true);
  }, [searchParams]);

  const useFormspree = Boolean(formspreeFormId);
  const formAction = useFormspree ? `https://formspree.io/f/${formspreeFormId}` : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    if (!useFormspree) {
      e.preventDefault();
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: siteLinks.email,
      href: `mailto:${siteLinks.email}`,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: siteLinks.phone,
      href: `tel:${siteLinks.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Veja meus projetos open source",
      href: siteLinks.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Conecte-se profissionalmente",
      href: siteLinks.linkedin,
    },
    {
      icon: FileText,
      label: "Currículo",
      value: "Baixe meu currículo",
      href: siteLinks.cv,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Contact | AJS Tech Studio</title>
        <meta name="description" content="Get in touch for consulting, product development or your next project. Let's build something great together." />
        <meta property="og:title" content="Contact | AJS Tech Studio" />
        <meta property="og:description" content="Get in touch for consulting and product development." />
      </Helmet>
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <HeroGradient />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary mb-3" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Contato</p>
            <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, fontFamily: "'Manrope', sans-serif", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Vamos construir algo{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">incrível.</span>
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl mx-auto" style={{ fontSize: 18, lineHeight: 1.7 }}>
              Ajudo empresas a construir, melhorar e escalar produtos digitais. Me conte sobre seu projeto e vamos explorar como posso ajudar.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Formulário */}
          <AnimatedSection className="lg:col-span-3" direction="left">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-3xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} className="text-primary" />
                </div>
                <h3 style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: 16, lineHeight: 1.6 }}>
                  Obrigado pelo contato. Retornarei em até 24 horas.
                </p>
              </motion.div>
            ) : (
              <div className="bg-white border border-border/60 rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/[0.02]">
                <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-7">Envie uma mensagem</h3>
                <form
                  onSubmit={handleSubmit}
                  action={formAction}
                  method={useFormspree ? "POST" : undefined}
                  className="space-y-5"
                >
                  {useFormspree && (
                    <input type="hidden" name="_next" value={`${siteLinks.siteUrl}/contact?submitted=1`} />
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 text-foreground" style={{ fontSize: 13, fontWeight: 600 }}>Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:bg-white focus:shadow-md focus:shadow-primary/5 focus:outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-foreground" style={{ fontSize: 13, fontWeight: 600 }}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:bg-white focus:shadow-md focus:shadow-primary/5 focus:outline-none transition-all"
                        placeholder="voce@empresa.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 text-foreground" style={{ fontSize: 13, fontWeight: 600 }}>Empresa</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:bg-white focus:shadow-md focus:shadow-primary/5 focus:outline-none transition-all"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-foreground" style={{ fontSize: 13, fontWeight: 600 }}>Tipo de Projeto</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:bg-white focus:shadow-md focus:shadow-primary/5 focus:outline-none transition-all appearance-none"
                      >
                        <option value="">Selecione um tipo</option>
                        <option value="product">Desenvolvimento de Produto</option>
                        <option value="backend">Engenharia Backend</option>
                        <option value="frontend">Desenvolvimento Frontend</option>
                        <option value="modernization">Modernização de Sistemas</option>
                        <option value="consulting">Consultoria Técnica</option>
                        <option value="integration">Integração e Automação</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-foreground" style={{ fontSize: 13, fontWeight: 600 }}>Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 focus:border-primary focus:bg-white focus:shadow-md focus:shadow-primary/5 focus:outline-none transition-all resize-none"
                      placeholder="Conte-me sobre o seu projeto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3.5 rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                    style={{ fontSize: 15, fontWeight: 600 }}
                  >
                    Enviar Mensagem <Send size={17} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection className="lg:col-span-2 space-y-6" direction="right" delay={0.2}>
            <div className="bg-white border border-border/60 rounded-3xl p-8 shadow-lg shadow-primary/[0.02]">
              <h3 style={{ fontSize: 18, fontWeight: 700, fontFamily: "'Manrope', sans-serif" }} className="mb-6">Conecte-se</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group p-3 -mx-3 rounded-xl hover:bg-primary/3"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-primary/8 to-accent/8 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p style={{ fontSize: 13, fontWeight: 600 }} className="text-foreground">{social.label}</p>
                      <p style={{ fontSize: 13 }} className="text-muted-foreground">{social.value}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <h3 style={{ fontSize: 15, fontWeight: 600 }}>Tempo de resposta</h3>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.7 }}>
                Costumo responder em até <span className="text-foreground" style={{ fontWeight: 600 }}>24 horas</span> em dias úteis. Para assuntos urgentes, mencione na sua mensagem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
