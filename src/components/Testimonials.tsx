import { Star, Quote } from 'lucide-react';
import type { ProfileData } from '../types';

interface TestimonialsProps {
  data: ProfileData;
}

export function Testimonials({ data }: TestimonialsProps) {
  return (
    <section id="testimonios" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-brand-500/6 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Opiniones</p>
          <h2 className="section-title text-balance">
            Lo que dicen mis <span className="gradient-text">clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-base p-7 flex flex-col ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center mb-5 flex-shrink-0">
                <Quote size={18} className="text-brand-700" />
              </div>

              {/* Comment */}
              <p className="text-surface-700 leading-relaxed text-sm flex-1 mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-surface-300'
                    }
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    testimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <p className="font-semibold text-surface-950 text-sm">{testimonial.name}</p>
                  <p className="text-surface-500 text-xs font-mono">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
