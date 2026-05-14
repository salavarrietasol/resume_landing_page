import type { ProfileData } from '../types';

interface ServicesProps {
  data: ProfileData;
}

export function Services({ data }: ServicesProps) {
  return (
    <section id="servicios" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-600/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Lo que ofrezco</p>
          <h2 className="section-title text-balance">
            Mis <span className="gradient-text">servicios</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg">
            Soluciones diseñadas para proteger y hacer crecer lo que más valoras.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.services.map((service, index) => (
            <div
              key={service.id}
              className="card-base p-7 group cursor-default"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-500/20 group-hover:border-brand-400/30 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-brand-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/55 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-5 flex items-center gap-2 text-brand-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Saber más</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
