export interface ProfileData {
  // Información personal
  name: string;
  title: string;
  tagline: string;
  description: string;
  longBio: string;
  avatar: string;

  // Datos de contacto
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  availability: string;
  languages: string[];

  // Redes sociales
  social: {
    linkedin?: string;
    instagram?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };

  // Estadísticas del hero
  stats: {
    label: string;
    value: string;
  }[];

  // Servicios
  services: Service[];

  // Experiencia
  experience: Experience[];

  // Proyectos
  projects: Project[];

  // Testimonios
  testimonials: Testimonial[];

  // CV descargable
  cvUrl?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  url?: string;
  type: 'tech' | 'commercial' | 'design' | 'other';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar?: string;
}
