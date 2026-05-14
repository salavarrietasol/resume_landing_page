# 🚀 CV Portfolio — Plantilla Web Profesional

Plantilla premium de CV Web / Portafolio Personal en **React + TypeScript + Tailwind CSS**.

---

## ✨ Características

- ⚡ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS — diseño dark mode premium
- 📱 Responsive mobile-first
- 🧩 Componentes reutilizables y separados
- 📁 Archivo de datos centralizado (`profileData.ts`)
- 🟢 Botón flotante de WhatsApp
- 🔗 Listo para desplegar en Vercel

---

## 📁 Estructura del proyecto

```
cv-portfolio/
├── public/
│   └── cv-valeria-moreno.pdf      ← CV descargable (agrega el tuyo aquí)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── data/
│   │   └── profileData.ts         ← 🔑 ARCHIVO PRINCIPAL DE DATOS
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

---

## ✏️ Personalización

### Para adaptar a un nuevo cliente, solo edita `src/data/profileData.ts`:

```ts
export const profileData: ProfileData = {
  name: 'Nombre del Cliente',
  title: 'Título Profesional',
  tagline: 'Frase destacada',
  whatsapp: '573001234567',   // Solo números
  email: 'correo@ejemplo.com',
  // ... resto de campos
};
```

### Cambiar colores del tema

En `tailwind.config.js`, modifica los colores bajo `theme.extend.colors.brand`:

```js
brand: {
  500: '#6c4ef3',   // Color principal
  600: '#5c30e8',   // Hover
  // ...
}
```

### Agregar foto de perfil

Coloca la imagen en `public/` y actualiza en `profileData.ts`:
```ts
avatar: '/mi-foto.jpg',
```

### Agregar CV descargable

Coloca el PDF en `public/` y actualiza:
```ts
cvUrl: '/cv-nombre.pdf',
```

---

## 🚀 Despliegue en Vercel

1. Sube el proyecto a GitHub
2. Conecta el repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta Vite automáticamente
4. ¡Listo!

---

## 📄 Licencia

Plantilla comercial — libre para uso con clientes.
