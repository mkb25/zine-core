# ZINE-CORE

**A Neo-Brutalist React Component Library.**

*Raw, hand-stamped energy meets digital punk. Thick borders, acid colors, and intentional misalignment.*

[**Live Demo & Documentation →**](https://zine-core.onrender.com/)

## 📖 Philosophy

ZINE-CORE is a rebellion against overly-polished, generic modern web design. It embraces the aesthetics of neo-brutalism: high contrast, unrefined typography, stark black borders, and vibrant colors. It's built for developers who want their interfaces to scream, not whisper. 

## ✨ Features

- **Neo-Brutalist Aesthetics**: Built-in thick borders, sharp drop shadows, and high-contrast color palettes.
- **Copy-to-Clipboard Documentation**: Easily copy component code directly from the documentation site.
- **Standalone CSS**: Can be used purely as a CSS library for non-React projects.
- **React Ready**: Fully functional, interactive React components for immediate use.
- **Responsive**: Raw design doesn't mean breaking usability on mobile devices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/zine-core.git
cd zine-core
npm install
```

### Local Development

Start the Vite development server:

```bash
npm run dev
```

The documentation and living styleguide will be available at `http://localhost:5173` (local) or [zine-core.onrender.com](https://zine-core.onrender.com/) (live).

### Build for Production

```bash
npm run build
```

## 📦 Usage

### Using React Components

Import the desired component and styles into your React project:

```jsx
import { Button } from './components/Button';
// Ensure the core styles are loaded
import '../public/styles.css'; 

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Make Noise
    </Button>
  );
}
```

### Using Standalone CSS

You can use the ZINE-CORE styles without React. Just link the core stylesheet in your HTML file:

```html
<link rel="stylesheet" href="/path/to/zine-core/public/styles.css">

<!-- Apply the classes to standard HTML elements -->
<button class="zine-btn zine-btn-primary">Make Noise</button>
```

## 🛠️ Components

The library is continually expanding. Check the local documentation site (`npm run dev`) for interactive examples and code snippets for:

- **Buttons**: Standard, Outline, and Ghost variants with signature brutalist hover states.
- **Cards**: Heavy-bordered containers for content.
- **Inputs**: High-contrast text fields and forms.
- **Badges**: Bold tags for categorization.

## 📂 Project Structure

```text
zine-core/
├── public/
│   ├── favicon.png      # Brand icon
│   ├── icons.svg        # SVG sprite sheet
│   └── styles.css       # Core Neo-Brutalist CSS tokens and utilities
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Documentation pages (Home, Docs, Components)
│   ├── App.jsx          # Main application routing
│   └── main.jsx         # Application entry point
├── index.html           # Vite HTML template
└── package.json
```

## 📜 License

MIT License. Do whatever you want with it. Go make something loud.
