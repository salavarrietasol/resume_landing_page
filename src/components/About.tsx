import { MapPin, Mail, Phone, Globe, Languages } from 'lucide-react';
import type { ProfileData } from '../types';

interface AboutProps {
  data: ProfileData;
}

export function About({ data }: AboutProps) {
  return (
    <section id="sobre-mi" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Conóceme</p>
          <h2 className="section-title text-balance">
            Sobre <span className="gradient-text">mí</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-base p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-surface-950">{data.name}</h3>
                  <p className="text-brand-700 text-sm font-mono">{data.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                {data.longBio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-surface-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {data.services.slice(0, 4).map((s) => (
                  <span
                    key={s.id}
                    className="px-3 py-1.5 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono"
                  >
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="space-y-4">
            <div className="card-base p-6">
              <h3 className="font-display font-semibold text-surface-950 mb-5 text-lg">
                Datos de contacto
              </h3>
              <div className="space-y-4">
                <InfoRow
                  icon={<MapPin size={16} />}
                  label="Ubicación"
                  value={data.location}
                />
                <InfoRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={data.email}
                  href={`mailto:${data.email}`}
                />
                <InfoRow
                  icon={<Phone size={16} />}
                  label="Teléfono"
                  value={data.phone}
                  href={`tel:${data.phone}`}
                />
                <InfoRow
                  icon={<Globe size={16} />}
                  label="Disponibilidad"
                  value={data.availability}
                />
                <InfoRow
                  icon={<Languages size={16} />}
                  label="Idiomas"
                  value={data.languages.join(', ')}
                />
              </div>
            </div>

            {/* Social links */}
            <div className="card-base p-6">
              <h3 className="font-display font-semibold text-surface-950 mb-4 text-lg">
                Redes profesionales
              </h3>
              <div className="space-y-3">
                {data.social.linkedin && (
                  <SocialLink href={data.social.linkedin} label="LinkedIn" icon="💼" />
                )}
                {data.social.instagram && (
                  <SocialLink href={data.social.instagram} label="Instagram" icon="📸" />
                )}
                {data.social.github && (
                  <SocialLink href={data.social.github} label="GitHub" icon="⚡" />
                )}
                {data.social.website && (
                  <SocialLink href={data.social.website} label="Sitio web" icon="🌐" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-700 flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-surface-500 text-xs font-mono uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-surface-900 text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-brand-50/70 hover:bg-brand-100 border border-brand-100 hover:border-brand-300 transition-all duration-200 group"
    >
      <span className="text-base">{icon}</span>
      <span className="text-surface-700 group-hover:text-brand-800 text-sm font-medium transition-colors">
        {label}
      </span>
    </a>
  );
}
