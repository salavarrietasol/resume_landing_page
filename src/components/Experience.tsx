import { CheckCircle2 } from 'lucide-react';
import type { ProfileData } from '../types';

interface ExperienceProps {
  data: ProfileData;
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section id="experiencia" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full bg-brand-500/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Trayectoria</p>
          <h2 className="section-title text-balance">
            Mi <span className="gradient-text">experiencia</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent transform lg:-translate-x-1/2" />

          <div className="space-y-8">
            {data.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute left-5 lg:left-1/2 top-6 w-3 h-3 rounded-full transform -translate-x-1/2 z-10 ${
                    exp.current
                      ? 'bg-brand-400 shadow-glow ring-4 ring-brand-500/20'
                      : 'bg-white border-2 border-brand-400/60'
                  }`}
                />

                {/* Date badge (desktop only) */}
                <div
                  className={`hidden lg:flex w-[calc(50%-2rem)] items-start pt-4 ${
                    index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'
                  }`}
                >
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      exp.current
                        ? 'bg-brand-50 border border-brand-200 text-brand-700'
                        : 'bg-white border border-surface-300 text-surface-500'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className="ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] card-base p-6 hover:shadow-brand">
                  {/* Mobile date */}
                  <span
                    className={`lg:hidden inline-block px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
                      exp.current
                        ? 'bg-brand-50 border border-brand-200 text-brand-700'
                        : 'bg-white border border-surface-300 text-surface-500'
                    }`}
                  >
                    {exp.period}
                  </span>

                  {exp.current && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow inline-block" />
                      <span className="text-brand-700 text-xs font-mono">Posición actual</span>
                    </div>
                  )}

                  <h3 className="font-display text-lg font-bold text-surface-950 mb-1">{exp.role}</h3>
                  <p className="text-brand-700 font-mono text-sm mb-3">{exp.company}</p>
                  <p className="text-surface-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-brand-700 mt-0.5 flex-shrink-0" />
                        <span className="text-surface-600 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
