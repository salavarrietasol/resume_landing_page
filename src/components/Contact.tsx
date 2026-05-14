import { useState } from 'react';
import { Send, MessageCircle, Mail, Linkedin, Instagram } from 'lucide-react';
import type { ProfileData } from '../types';

interface ContactProps {
  data: ProfileData;
}

export function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect with form data
    const msg = encodeURIComponent(
      `Hola ${data.name.split(' ')[0]}, me llamo ${formData.name}.\n\n${formData.message}\n\nMi email: ${formData.email}`
    );
    window.open(`https://wa.me/${data.whatsapp}?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-80 bg-brand-600/5 blur-3xl rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Hablemos</p>
          <h2 className="section-title text-balance">
            ¿Listo para <span className="gradient-text">empezar</span>?
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto text-lg">
            Cuéntame tu caso y encontramos la mejor solución para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 card-base p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2 font-mono">
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="¿Cómo te llamas?"
                  className="w-full bg-surface-600/50 border border-white/10 focus:border-brand-500/50 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm font-medium mb-2 font-mono">
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="correo@ejemplo.com"
                  className="w-full bg-surface-600/50 border border-white/10 focus:border-brand-500/50 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm font-medium mb-2 font-mono">
                  Tu mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full bg-surface-600/50 border border-white/10 focus:border-brand-500/50 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full btn-primary justify-center py-4 ${
                  sent ? 'bg-green-600 hover:bg-green-500' : ''
                }`}
              >
                {sent ? (
                  <>✓ ¡Redirigiendo a WhatsApp!</>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar por WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card-base p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-5">
                Contáctame directo
              </h3>
              <div className="space-y-3">
                <ContactItem
                  href={`https://wa.me/${data.whatsapp}`}
                  icon={<MessageCircle size={18} />}
                  label="WhatsApp"
                  value={data.phone}
                  color="text-green-400"
                  bg="bg-green-400/10 border-green-400/20"
                />
                <ContactItem
                  href={`mailto:${data.email}`}
                  icon={<Mail size={18} />}
                  label="Email"
                  value={data.email}
                  color="text-brand-400"
                  bg="bg-brand-400/10 border-brand-400/20"
                />
                {data.social.linkedin && (
                  <ContactItem
                    href={data.social.linkedin}
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                    value="Perfil profesional"
                    color="text-blue-400"
                    bg="bg-blue-400/10 border-blue-400/20"
                  />
                )}
                
              </div>
            </div>

            {/* CTA Card */}
            <div className="card-base p-6 bg-gradient-to-br from-brand-600/20 to-brand-900/20 border-brand-500/20">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-display font-semibold text-white mb-2">
                Respuesta rápida
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Generalmente respondo en menos de 2 horas durante días hábiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
  color,
  bg,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  bg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/8 border border-white/5 hover:border-white/10 transition-all duration-200 group"
    >
      <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${bg} ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-white/40 text-xs font-mono">{label}</p>
        <p className={`text-sm font-medium ${color} group-hover:opacity-100 opacity-80 transition-opacity`}>
          {value}
        </p>
      </div>
    </a>
  );
}
