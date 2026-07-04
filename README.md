# YOUNICORE — Agency for the New Culture

[![Younicore Thumbnail](https://res.cloudinary.com/dkev7ein3/image/upload/v1783174291/Thumbnail_gajanw.jpg)](https://github.com/panduthegang/Younicore)

YOUNICORE is a premium, high-end digital design agency website built for the new culture. Featuring a brutalist luxury aesthetic, dark-mode textures, custom motion layouts, and responsive components, this platform represents the perfect union of human artistry and AI augmentation.

---

## ⚡ Key Features

- 🎭 **Unified Brutalist Luxury Design**: Dark-mode color palette (`#050404` deep charcoal-sepia black and `#FAF6F0` warm cream text) combined with classical sculpture backdrops.
- 📱 **Split-Screen Dynamic Navbar**: Fullscreen menu drawer displaying an entrance-sliding portrait graphic and staggered, bottom-up slide-in navigation links. Built-in body scroll lock and viewport-height scaling protect mobile UX.
- 📐 **Unified Heading Typography**: Consistent, impactful tall display typography using the custom Google Font **Bebas Neue** across all section headings.
- 🌀 **Parallax & Motion Effects**: Dynamic cursor-interactive floating overlays, rotating stamp seals, and clean hover state transformations.
- 📐 **Responsive Sticky Horizontal Scroll**: A custom horizontal scroll showcase for **Selected Work** projects built using React scroll hooks that runs smoothly on both desktop and mobile touchscreens.
- 👥 **The Collective Grid**: A full-width vertical portrait showcase of the creative team with overlay text descriptions and zoom interactions.
- 🔗 **Full SEO Optimization**: Open Graph and Twitter Card tags configured with custom link preview assets for premium card sharing visuals.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) (with [TypeScript](https://www.typescriptlang.org/))
- **Bundler & Server**: [Vite](https://vitejs.dev/) (for fast hot module reloading)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & Vanilla CSS variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**:
  - `Bebas Neue` (Brutalist display headings)
  - `Space Mono` (UI indicators and microcopy)
  - `Inter` (Standard body copy)
  - `Cinzel` & `Bodoni Moda` (Classic luxury serifs)

---

## 🚀 Setup & Installation

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/panduthegang/Younicore.git
cd Younicore
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot reload:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
Generate the optimized production bundle inside the `dist/` directory:
```bash
npm run build
```

---

## 📁 Project Structure

```text
Younicore/
├── public/                 # Static assets (images, logos, preview clips)
├── src/
│   ├── components/         # Modular layout components
│   │   ├── Navbar.tsx      # Fixed header + fullscreen height-responsive menu
│   │   ├── Hero.tsx        # Title section, vertical badges, rotating stamp
│   │   ├── Manifesto.tsx   # Integrated sculpture section with cloud tagline
│   │   ├── Services.tsx    # List-details layout with interactive hover triggers
│   │   ├── Work.tsx        # Sticky horizontal scroll project card strip
│   │   ├── Team.tsx        # Vertical portrait cards collective grid
│   │   └── Footer.tsx      # Statue backdrop call-to-action & footer nav
│   ├── App.tsx             # Section stack layout rendering
│   ├── index.css           # Tailwind custom base styles & height queries
│   └── main.tsx            # Application entry point
├── index.html              # Main HTML entry point containing meta tags
├── tailwind.config.js      # Tailwind theme extensions & font mappings
└── tsconfig.json           # TypeScript configuration
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>HUMAN MADE • AI AUGMENTED</b><br/>
  © 2026 YOUNICORE. All Rights Reserved.
</p>
