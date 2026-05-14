import { ExternalLink } from 'lucide-react';
import type { ProfileData } from '../types';

interface ProjectsProps {
  data: ProfileData;
}

const typeColors: Record<string, string> = {
  tech: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  commercial: 'bg-brand-500/10 border-brand-500/20 text-brand-300',
  design: 'bg-pink-500/10 border-pink-500/20 text-pink-300',
  other: 'bg-white/5 border-white/10 text-white/60',
};

const typeLabels: Record<string, string> = {
  tech: 'Tecnología',
  commercial: 'Comercial',
  design: 'Diseño',
  other: 'Otro',
};

const projectPlaceholders = ['🏆', '💡', '🎯', '📈', '🔑', '⭐'];

export function Projects({ data }: ProjectsProps) {
  return (
    <section id="proyectos" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-60 bg-brand-600/5 blur-3xl rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Portafolio</p>
          <h2 className="section-title text-balance">
            Casos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-lg">
            Algunos de los proyectos y casos en los que he tenido el placer de trabajar.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <div
              key={project.id}
              className="card-base overflow-hidden group flex flex-col"
            >
              {/* Image / Placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-surface-600 to-surface-800 overflow-hidden flex-shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl opacity-40">
                      {projectPlaceholders[index % projectPlaceholders.length]}
                    </span>
                    {/* Decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent" />
                  </div>
                )}
                {/* Type badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${typeColors[project.type]}`}
                  >
                    {typeLabels[project.type]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-brand-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-white/50 text-xs font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.url || '#contacto'}
                  className="flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors group/link"
                >
                  Ver más
                  <ExternalLink
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
