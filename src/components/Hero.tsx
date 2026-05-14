import { Download, MessageCircle, ChevronDown } from 'lucide-react';
import type { ProfileData } from '../types';

interface HeroProps {
  data: ProfileData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-700/6 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-mono mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow inline-block" />
              {data.availability}
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Hola, soy{' '}
              <span>{data.name.split(' ')[0]}</span>
            </h1>

            {/* Title */}
            <p
              className="text-brand-300 font-mono text-lg sm:text-xl mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              {data.title}
            </p>

            {/* Tagline */}
            <p
              className="font-display text-2xl sm:text-3xl text-white/90 italic mb-6 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
            >
              "{data.tagline}"
            </p>

            {/* Description */}
            <p
              className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              {data.description}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <a
                href={`https://wa.me/${data.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-3.5 px-8"
              >
                <MessageCircle size={20} />
                Contactar por WhatsApp
              </a>
              {data.cvUrl && (
                <a href={data.cvUrl} download className="btn-secondary text-base py-3.5 px-8">
                  <Download size={20} />
                  Descargar CV
                </a>
              )}
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
            >
              {data.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="font-display text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-white/50 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div
            className="relative flex-shrink-0 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-brand-500/20 animate-float" />
              <div className="absolute inset-4 rounded-full border border-brand-400/15 animate-float" style={{ animationDelay: '-1s' }} />
              {/* Glow */}
              <div className="absolute inset-8 rounded-full bg-brand-600/10 blur-xl" />
              {/* Avatar image or initials */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-brand-800 to-brand-950 flex items-center justify-center shadow-brand-lg border border-white/10">
                {data.avatar ? (
                  <img
                    src={data.avatar}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display text-6xl font-bold gradient-text">
                    {data.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                )}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-surface-700 border border-white/10 rounded-2xl px-4 py-2.5 shadow-card">
                <p className="text-white font-semibold text-sm">{data.title}</p>
                <p className="text-brand-400 text-xs font-mono">{data.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
          >
            <span className="text-xs font-mono">Explorar perfil</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
