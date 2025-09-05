# 🌐 Centro Cultural de Ciberseguridad - Sitio Web

Este proyecto es el sitio web oficial del **Centro Cultural de Ciberseguridad**, una organización estudiantil universitaria que promueve la **concientización, cultura y formación en ciberseguridad**.
El proyecto está construido con **React + Vite**, aplicando la metodología **Atomic Design** para lograr una arquitectura modular, escalable y fácil de mantener.

---

## 🚀 Tecnologías utilizadas

- **React 18** – Librería principal para la construcción de interfaces.
- **Vite** – Bundler y entorno de desarrollo rápido.
- **Tailwind CSS** – Framework de utilidades CSS para estilos modernos y responsivos.
- **Shadcn/UI & Lucide-react** – Componentes y librería de íconos.
- **Framer Motion** – Animaciones fluidas y modernas.
- **Atomic Design** – Metodología para la organización de componentes.

---

## 📂 Estructura del proyecto

```
src/
├── App.css               # Estilos globales de la aplicación
├── App.jsx               # Componente raíz de la app
├── assets/               # Recursos estáticos
│   ├── fonts/            # Tipografías personalizadas
│   │   ├── lato.woff2
│   │   └── montserrat.woff2
│   ├── images/           # Imágenes de la app
│   │   └── perfil.jpeg
│   ├── Logo.png          # Logo institucional
│   └── react.svg         # Logo de React
├── components/           # Componentes siguiendo Atomic Design
│   ├── atoms/            # Componentes básicos e indivisibles
│   │   ├── Dot.jsx
│   │   ├── Heading.jsx
│   │   ├── Icons.jsx
│   │   ├── Link.jsx
│   │   ├── Panel.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── ProfileImage.jsx
│   │   ├── SecondaryButton.jsx
│   │   └── Text.jsx
│   ├── molecules/        # Combinaciones de átomos
│   │   ├── CarouselItem.jsx
│   │   ├── Dots.jsx
│   │   └── Field.jsx
│   ├── organisms/        # Secciones completas
│   │   ├── Banner.jsx
│   │   ├── Carousel.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/            # Páginas completas
│   │   └── Home.jsx
│   └── templates/        # Plantillas de layout (por implementar)
├── index.css             # Estilos base
├── main.jsx              # Punto de entrada de la aplicación
└── styles/               # Estilos adicionales (utilidades, overrides)
public/
└── vite.svg              # Ícono estático de Vite
```

---

## ⚙️ Instalación y uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/usuario/centro-cultural-ciberseguridad.git
   cd centro-cultural-ciberseguridad
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   npm run dev
   ```

4. **Compilar para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build**

   ```bash
   npm run preview
   ```

---

## 🎨 Características principales

- Diseño moderno, minimalista y totalmente **responsivo**.
- Componentes reutilizables bajo el enfoque de **Atomic Design**.
- Animaciones fluidas con **Framer Motion**.
- Integración de tipografías personalizadas.
- Navegación clara con **Navbar** y **Footer**.
- Home con **banner, carrusel y secciones informativas**.

---

## 🛠️ Próximas mejoras

- Implementación de secciones adicionales: **Junta Directiva, Eventos, Noticias, Recursos de formación**.
- Integración con **formulario de contacto**.
- Optimización para **SEO**.
- Accesibilidad mejorada (**WCAG compliance**).
- Despliegue en **Vercel/Netlify**.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
Eres libre de usarlo, modificarlo y adaptarlo para tus necesidades.

---
