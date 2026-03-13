import { Link } from "react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { siteLinks } from "../lib/siteLinks";

const navItems = [
  { label: "Projetos", path: "/projects" },
  { label: "Serviços", path: "/services" },
  { label: "Experiência", path: "/experience" },
  { label: "Sobre", path: "/about" },
  { label: "Contato", path: "/contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: siteLinks.github },
  { icon: Linkedin, label: "LinkedIn", href: siteLinks.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${siteLinks.email}` },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="bg-[#0B1120]">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-white" style={{ fontSize: 15, fontWeight: 800 }}>A</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700 }} className="text-white tracking-tight">
                  AJS Tech Studio
                </span>
              </div>
              <p className="text-white/45 max-w-sm mb-6" style={{ fontSize: 14, lineHeight: 1.7 }}>
                Construindo software escalável para empresas modernas. Ruby on Rails, Next.js e consultoria focada em produto.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all"
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navegação */}
            <div className="md:col-span-3">
              <h4 className="mb-5 text-white/80" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Navegação</h4>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-white/40 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    style={{ fontSize: 14 }}
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contato */}
            <div className="md:col-span-4">
              <h4 className="mb-5 text-white/80" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Vamos conversar</h4>
              <p className="text-white/40 mb-5" style={{ fontSize: 14, lineHeight: 1.7 }}>
                Interessado em trabalhar juntos? Me envie uma mensagem e retorno em 24h.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
                style={{ fontSize: 14, fontWeight: 600 }}
              >
                Fale Comigo <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/25" style={{ fontSize: 13 }}>
              &copy; 2026 AJS Tech Studio. Todos os direitos reservados.
            </p>
            <p className="text-white/25" style={{ fontSize: 13 }}>
              Feito com dedicação e boas práticas de engenharia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
