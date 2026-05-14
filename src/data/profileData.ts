import type { ProfileData } from '../types';

// ============================================================
// ARCHIVO DE CONFIGURACIÓN CENTRAL
// Cambia estos datos para personalizar el CV de cada cliente
// ============================================================

export const profileData: ProfileData = {
  // ─────────────────────────────────────────────
  // INFORMACIÓN PERSONAL
  // ─────────────────────────────────────────────
  name: 'Carolina Vélez',
  title: 'Asesora Comercial & de Seguros',
  avatar: '/foto_prueba.png', 
  avatarBack: '/foto_prueba_2.png',
  tagline: 'Seguros para tu tranquilidad y la de tu familia.',
  description:
    'Te asesoro para que elijas el seguro ideal, con las mejores coberturas y el mejor precio. Más de 7 años ayudando a familias y empresas a proteger lo que más valoran.',
  longBio: `Soy Carolina Vélez, asesora comercial certificada con más de 7 años de trayectoria en el sector asegurador. Mi enfoque está en construir relaciones de largo plazo con mis clientes, entender su realidad y diseñar soluciones que se adapten a sus necesidades reales.

He acompañado a más de 200 familias y 40 empresas en la estructuración de portafolios de seguros personalizados, logrando coberturas completas con el mejor balance costo-beneficio del mercado.

Mi filosofía es simple: un buen seguro no es el más caro, es el que te da la cobertura exacta que necesitas cuando más lo necesitas.`,

  // ─────────────────────────────────────────────
  // DATOS DE CONTACTO
  // ─────────────────────────────────────────────
  email: 'carolina@ejemplo.com',
  phone: '+57 300 4843 894',
  whatsapp: '573004843894', // Solo números, sin + ni espacios
  location: 'Medellín, Colombia',
  availability: 'Disponible',
  languages: ['Español'],

  // ─────────────────────────────────────────────
  // REDES SOCIALES
  // ─────────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/in/carolinavelez',
    instagram: 'https://instagram.com/carolinavelez',
    github: undefined,
    twitter: undefined,
    website: undefined,
  },

  // ─────────────────────────────────────────────
  // ESTADÍSTICAS DEL HERO
  // ─────────────────────────────────────────────
  stats: [
    { value: '+7 años', label: 'de experiencia' },
    { value: '+200', label: 'clientes atendidos' },
    { value: '98%', label: 'satisfacción' },
  ],

  // URL del CV descargable (PDF en /public)
  cvUrl: '/cv-valeria-moreno.pdf',

  // ─────────────────────────────────────────────
  // SERVICIOS
  // ─────────────────────────────────────────────
  services: [
    {
      id: 's1',
      icon: '🛡️',
      title: 'Seguros de Vida',
      description:
        'Protege el futuro de tu familia con planes de vida diseñados a tu medida y presupuesto.',
    },
    {
      id: 's2',
      icon: '🏥',
      title: 'Seguros de Salud',
      description:
        'Accede a la mejor atención médica sin preocuparte por los costos. Planes individuales y familiares.',
    },
    {
      id: 's3',
      icon: '🏠',
      title: 'Seguros de Patrimonio',
      description:
        'Protege tu hogar, vehículo y bienes con coberturas integrales contra imprevistos.',
    },
    {
      id: 's4',
      icon: '💼',
      title: 'Seguros Empresariales',
      description:
        'Soluciones corporativas para proteger a tu equipo, activos y la continuidad de tu negocio.',
    },
    {
      id: 's5',
      icon: '📊',
      title: 'Asesoría Personalizada',
      description:
        'Análisis completo de tus necesidades para recomendarte el portafolio ideal sin rodeos.',
    },
    {
      id: 's6',
      icon: '🤝',
      title: 'Gestión de Siniestros',
      description:
        'Te acompaño en todo el proceso de reclamación para que obtengas lo que te corresponde.',
    },
  ],

  // ─────────────────────────────────────────────
  // EXPERIENCIA LABORAL
  // ─────────────────────────────────────────────
  experience: [
    {
      id: 'e1',
      role: 'Asesora Comercial Senior',
      company: 'Seguros Premium Colombia',
      period: '2021 – Presente',
      current: true,
      description:
        'Lidero la cartera de clientes VIP de la regional Antioquia, gestionando más de 150 pólizas activas y coordinando un equipo de 4 asesores junior.',
      achievements: [
        'Crecimiento del 35% en renovaciones año a año',
        'Premio al mejor desempeño comercial 2023',
        'Portafolio de clientes con 0% de cancelaciones en 2022',
      ],
    },
    {
      id: 'e2',
      role: 'Ejecutiva de Cuenta',
      company: 'Mapfre Colombia',
      period: '2018 – 2021',
      description:
        'Gestión integral de cuentas corporativas y atención de clientes en seguros de vida y salud para el sector empresarial.',
      achievements: [
        'Cierre de 12 cuentas corporativas en el primer año',
        'Capacitación y mentoría a equipo de ventas',
        'Implementación de proceso de seguimiento postventa',
      ],
    },
    {
      id: 'e3',
      role: 'Asesora Comercial',
      company: 'Sura Asset Management',
      period: '2016 – 2018',
      description:
        'Inicio de carrera en el sector asegurador, enfocada en seguros de vida individual y productos de ahorro e inversión.',
      achievements: [
        'Top 10 vendedoras nacionales en primer trimestre',
        'Certificación en productos de vida y ahorro',
        'Construcción de base de datos de 80+ clientes activos',
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // PROYECTOS / CASOS DESTACADOS
  // ─────────────────────────────────────────────
  projects: [
    {
      id: 'p1',
      title: 'Plan Familiar Integral 360°',
      description:
        'Diseño de un portafolio completo para una familia de 5 personas cubriendo vida, salud, hogar y vehículos con un solo proveedor y descuentos por multipóliza.',
      tags: ['Seguros de Vida', 'Salud', 'Hogar', 'Multipóliza'],
      type: 'commercial',
    },
    {
      id: 'p2',
      title: 'Protección Empresarial PyME',
      description:
        'Estructuración del programa de seguros para una empresa de 45 empleados, incluyendo vida grupo, salud colectiva y póliza de responsabilidad civil.',
      tags: ['Empresarial', 'Vida Grupo', 'RC', 'Colectivo'],
      type: 'commercial',
    },
    {
      id: 'p3',
      title: 'Optimización de Portafolio Existente',
      description:
        'Auditoría y reestructuración del portafolio de seguros de un cliente, logrando la misma cobertura con un ahorro del 22% en primas anuales.',
      tags: ['Optimización', 'Ahorro', 'Consultoría', 'Auditoría'],
      type: 'commercial',
    },
  ],

  // ─────────────────────────────────────────────
  // TESTIMONIOS
  // ─────────────────────────────────────────────
  testimonials: [
    {
      id: 't1',
      name: 'Carlos Restrepo',
      role: 'Empresario – Medellín',
      comment:
        'Valeria no solo nos vendió un seguro, nos asesoró de verdad. Restructuró toda nuestra protección empresarial y logramos ahorrar dinero teniendo mejor cobertura. Totalmente recomendada.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'María Fernanda Gómez',
      role: 'Madre de familia – Bogotá',
      comment:
        'Gracias a Valeria tenemos la tranquilidad de saber que toda la familia está protegida. Fue muy paciente explicando cada detalle y encontró el plan perfecto para nuestro presupuesto.',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Andrés Villada',
      role: 'Gerente de RR.HH. – Empresa mediana',
      comment:
        'Excelente profesionalismo y acompañamiento. Nos ayudó en todo el proceso de siniestro y obtuvimos el desembolso en tiempo récord. Un servicio de altísima calidad.',
      rating: 5,
    },
  ],
};
