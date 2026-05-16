# How ZINE-CORE Works

The core philosophy of `zine-core` is to be as raw and accessible as its visual style. Rather than relying on complex CSS-in-JS libraries or heavy build steps, it's fundamentally built on standard vanilla CSS and minimal React wrappers.

## 1. The Core Engine: `styles.css`

The entire design system lives within a single, standalone stylesheet (`public/styles.css`). This is the true heart of the project.

### CSS Variables (Design Tokens)
At the top of `styles.css`, we define our Neo-Brutalist design tokens using CSS variables attached to the `:root` pseudo-class:

```css
:root {
  --acid-yellow: #F5F500;
  --electric-coral: #FF3D3D;
  --near-black: #0D0D0D;
  --border: 3px solid var(--near-black);
  --shadow: 6px 6px 0px var(--near-black);
  --shadow-hover: 10px 10px 0px var(--near-black);
  /* ... */
}
```

This makes the system incredibly easy to theme. If you want to change the shadow depth or border thickness globally, you just alter the root variables.

### Utility & Component Classes
The components are styled using a custom class naming convention prefixed with `zn-`. For example:
- `.zn-btn` (base button styles)
- `.zn-btn--primary` (primary variant modifier)
- `.zn-card` (base card styles)
- `.zn-input-wrap` (input wrapper)

These classes handle all the complex Neo-Brutalist styling—the thick borders, the sharp non-blurred box-shadows, the intentional hover translation effects, and the stark typography.

## 2. The React Layer

While developers *can* use just the CSS, `zine-core` provides a suite of React components (located in `src/components/`) that act as convenient, developer-friendly wrappers around these CSS classes.

### The Wrapper Pattern
A typical component in `zine-core` is a standard React functional component that maps props to the appropriate `zn-` CSS classes. 

For instance, the `<Button>` component might take a `variant` prop (like `"primary"`, `"ghost"`, `"danger"`) and dynamically append the correct class (`zn-btn--primary`) alongside the base class (`zn-btn`) to a standard HTML `<button>` element.

This dual-layer approach offers several benefits:
1. **Lightweight Runtime**: We aren't shipping a heavy styling runtime. The browser just parses standard CSS.
2. **Framework-Agnostic Foundation**: Because all the heavy lifting (animations, colors, layout) is done in standard CSS, porting the `zine-core` aesthetics to Vue, Svelte, Angular, or vanilla HTML is trivial. You just apply the classes.
3. **Great Developer Experience**: React developers get the benefits of prop-driven development, while the underlying DOM output remains clean, predictable, and semantic.

## 3. The Documentation Site

The React application executing inside the `src/` directory (managed by Vite, utilizing React Router in `App.jsx`, `HomePage.jsx`, etc.) serves as the documentation site and "living styleguide" for the library.

It imports the reusable components from `src/components/` and renders them interactively so developers can:
- See the components in action.
- Test hover/focus states.
- Copy the underlying React code or HTML/CSS snippets for immediate use.

## Summary of the Working Principle

1. **Tokens**: Global styles and colors are defined as variables in `:root`.
2. **Styles**: `styles.css` applies these tokens to standard `.zn-*` component classes.
3. **Components**: React Components (`src/components/*`) construct the HTML markup and automatically apply the correct `.zn-*` classes based on the props provided by the developer.
4. **Implementation**: The end-user imports the React components (and the core stylesheet) to build their user interface with minimal friction.
