import { Linkedin, Instagram, Github, Globe } from 'lucide-react';
import type { ProfileData } from '../types';

interface FooterProps {
  data: ProfileData;
}

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export function Footer({ data }: FooterProps) {
  const year = new Date().getFullYear();
  const initials = data.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <footer className="border-t border-white/5 bg-surface-900/80 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center font-display font-bold text-white">
                {initials}
              </div>
              <div>
                <p className="font-display font-semibold text-white">{data.name}</p>
                <p className="text-brand-400 text-xs font-mono">{data.title}</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">
              {data.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {data.social.linkedin && (
                <SocialIcon href={data.social.linkedin} icon={<Linkedin size={16} />} />
              )}
              {data.social.instagram && (
                <SocialIcon href={data.social.instagram} icon={<Instagram size={16} />} />
              )}
              {data.social.github && (
                <SocialIcon href={data.social.github} icon={<Github size={16} />} />
              )}
              {data.social.website && (
                <SocialIcon href={data.social.website} icon={<Globe size={16} />} />
              )}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              Contacto
            </p>
            <ul className="space-y-2">
              <li className="text-white/55 text-sm">{data.location}</li>
              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  {data.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${data.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white text-sm transition-colors"
                >
                  {data.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono">
            © {year} {data.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Hecho con ♥ para destacar tu perfil profesional
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-500/20 border border-white/5 hover:border-brand-500/30 flex items-center justify-center text-white/50 hover:text-brand-300 transition-all duration-200"
    >
      {icon}
    </a>
  );
}
