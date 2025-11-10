# BSH Engine Landing Page

A modern, professional React/TypeScript landing page for BSH Engine - a powerful backend-as-a-service platform.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with React 18 and TypeScript
- 🚀 Fast development with Vite
- 📱 Mobile-first, fully responsive
- ♿ Accessible and WCAG compliant
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── KeyCapabilities.tsx
│   │   │   ├── CodeExamples.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── QuickStart.tsx
│   │   │   └── Footer.tsx
│   │   ├── LandingPage.tsx
│   │   └── Navbar.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the `colors.primary` section.

### Content

Each section component can be edited independently:
- `Hero.tsx` - Main hero section with headline and CTAs
- `Features.tsx` - Feature cards grid
- `KeyCapabilities.tsx` - Detailed capabilities showcase
- `CodeExamples.tsx` - Code examples with syntax highlighting
- `Benefits.tsx` - Benefits grid
- `QuickStart.tsx` - Getting started guide
- `Footer.tsx` - Footer with links and information

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## License

MIT

