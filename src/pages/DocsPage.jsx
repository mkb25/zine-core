import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CLASSES = [
  ['zn-btn--primary', 'Yellow fill button'],
  ['zn-btn--secondary', 'Outline button'],
  ['zn-btn--danger', 'Coral fill button'],
  ['zn-btn--ghost', 'Underline only'],
  ['zn-badge--yellow', 'Acid yellow badge'],
  ['zn-badge--coral', 'Coral badge'],
  ['zn-badge--cobalt', 'Cobalt badge'],
  ['zn-alert--info', 'Blue left bar alert'],
  ['zn-alert--warning', 'Yellow left bar'],
  ['zn-alert--error', 'Coral left bar'],
  ['zn-alert--success', 'Green left bar'],
  ['zn-avatar--coral', 'Coral avatar'],
  ['zn-avatar--cobalt', 'Cobalt avatar'],
  ['zn-spinner--coral', 'Coral spinner'],
  ['zn-spinner--cobalt', 'Cobalt spinner'],
  ['zn-spinner--lg', 'Large spinner'],
  ['zn-progress-fill--coral', 'Coral progress'],
  ['zn-progress-fill--cobalt', 'Cobalt progress'],
  ['zn-key--yellow', 'Yellow kbd key'],
  ['zn-key--coral', 'Coral kbd key'],
]

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="docs-code-wrap">
      <button className={`docs-copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
        {copied ? '✓ copied' : 'copy'}
      </button>
      <pre className="docs-code"><code>{code}</code></pre>
    </div>
  )
}

export default function DocsPage() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(localStorage.getItem('docs-theme') || 'light')
  const [activeSection, setActiveSection] = useState('install')

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActiveSection(e.target.id)}),{rootMargin:'-20% 0px -60% 0px',threshold:0})
    document.querySelectorAll('.docs-section').forEach(s=>obs.observe(s))
    return ()=>obs.disconnect()
  },[])

  const handleNavClick = useCallback((id) => {
    setActiveSection(id)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('docs-theme', newTheme)
  }

  return (
    <div className="docs-page" data-theme={theme}>
      <aside className="docs-sidebar">
        <div className="docs-sidebar-title">// Docs</div>
        
        <button 
          onClick={toggleTheme} 
          className="zn-btn" 
          style={{ 
            width: '100%', 
            fontSize: '0.65rem', 
            marginBottom: '1rem',
            padding: '0.5rem',
            background: theme === 'light' ? 'var(--near-black)' : 'var(--acid-yellow)',
            color: theme === 'light' ? 'var(--off-white)' : 'var(--near-black)',
            transform: 'rotate(-1deg)',
            borderRadius: '0',
            boxShadow: theme === 'light' ? '3px 3px 0 var(--flat-cobalt)' : '3px 3px 0 var(--electric-coral)'
          }}
        >
          {theme === 'light' ? '☾ DARK MODE' : '☼ LIGHT MODE'}
        </button>

        {[
          ['install', 'Installation'],
          ['cdn', 'CDN / Link Tag'],
          ['fonts', 'Fonts Setup'],
          ['css-vars', 'CSS Variables'],
          ['usage', 'Basic Usage'],
          ['integration', 'Integration'],
          ['class-ref', 'Class Reference'],
          ['customise', 'Customisation'],
        ].map(([id, label]) => (
          <a 
            key={id} 
            href={`#${id}`} 
            className={`docs-nav-link${activeSection === id ? ' active' : ''}`}
            onClick={() => handleNavClick(id)}
          >
            {label}
          </a>
        ))}
        <button className="zn-btn zn-btn--primary" style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.75rem' }} onClick={() => navigate('/components')}>
          Components →
        </button>
      </aside>

      <main className="docs-main">
        <h1 className="docs-title">Integration Guide</h1>
        <p className="docs-lead">
          ZINE-CORE is a <strong>copy-paste library</strong>. There is no npm package.
          You pick the components you need, copy their HTML structure and CSS rules, and adapt them to your project.
        </p>

        {/* INSTALLATION */}
        <section className="docs-section" id="install">
          <h2 className="docs-h2">01 — Installation</h2>
          <p>Scaffold a fresh Vite + React project:</p>
          <CodeBlock code={`npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`} />
          <p>No extra packages needed for basic usage. If you want routing (like this site), add React Router:</p>
          <CodeBlock code={`npm install react-router-dom`} />
        </section>

        {/* CDN / STANDALONE */}
        <section className="docs-section" id="cdn">
          <h2 className="docs-h2">02 — CDN / Standalone CSS</h2>
          <p>For the fastest integration, skip the setup and link the hosted stylesheet directly in your <code>&lt;head&gt;</code>:</p>
          <CodeBlock code={`<link rel="stylesheet" href="https://zine-core.onrender.com/styles.css">`} />
          <p>This includes all design tokens (colors, fonts, borders) and component classes (<code>.zn-*</code>). Note: You still need to include the Google Fonts link below for the typography to work.</p>
        </section>

        {/* FONTS */}
        <section className="docs-section" id="fonts">
          <h2 className="docs-h2">03 — Fonts Setup</h2>
          <p>Add both fonts to your <code>index.html</code> <code>{'<head>'}</code>:</p>
          <CodeBlock code={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">`} />
          <p>Then reference them in CSS via the variables (already set in <code>:root</code>):</p>
          <CodeBlock code={`--font-display: 'Syne', sans-serif;    /* headers */
--font-mono: 'IBM Plex Mono', monospace; /* body/labels */`} />
        </section>

        {/* CSS VARIABLES */}
        <section className="docs-section" id="css-vars">
          <h2 className="docs-h2">04 — CSS Variables</h2>
          <p>Paste these into your <code>index.css</code> or global stylesheet. All component styles depend on them:</p>
          <CodeBlock code={`:root {
  --acid-yellow:    #F5F500;
  --electric-coral: #FF3D3D;
  --flat-cobalt:    #1A1AFF;
  --near-black:     #0D0D0D;
  --off-white:      #F2EFE8;

  --border:         3px solid var(--near-black);
  --shadow:         6px 6px 0px var(--near-black);
  --shadow-hover:   10px 10px 0px var(--near-black);
  --radius:         4px;

  --font-display:   'Syne', sans-serif;
  --font-mono:      'IBM Plex Mono', monospace;
  --transition:     all 0.15s cubic-bezier(0.2, 0, 0, 1);
}`} />
        </section>

        {/* BASIC USAGE */}
        <section className="docs-section" id="usage">
          <h2 className="docs-h2">05 — Basic Usage</h2>
          <p>Every component in the library has a <strong>{'< copy />'}</strong> button. Click it, paste the JSX, copy the matching CSS classes from <code>index.css</code>.</p>

          <h3 className="docs-h3">Button</h3>
          <CodeBlock code={`/* JSX */
<button className="zn-btn zn-btn--primary">Click Me</button>
<button className="zn-btn zn-btn--danger" disabled>Delete</button>`} />

          <h3 className="docs-h3">Alert</h3>
          <CodeBlock code={`<div className="zn-alert zn-alert--error">
  <span className="zn-alert-icon">✕</span>
  <div>
    <div className="zn-alert-label">Error</div>
    <div className="zn-alert-msg">Something broke.</div>
  </div>
</div>`} />

          <h3 className="docs-h3">Modal (needs React state)</h3>
          <CodeBlock code={`function MyPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="zn-btn zn-btn--primary" onClick={() => setOpen(true)}>
        Open
      </button>
      {open && (
        <div className="zn-modal-overlay" onClick={() => setOpen(false)}>
          <div className="zn-modal" onClick={e => e.stopPropagation()}>
            <div className="zn-modal-header">Confirm</div>
            <div className="zn-modal-body">Are you sure?</div>
            <div className="zn-modal-footer">
              <button className="zn-btn zn-btn--secondary" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="zn-btn zn-btn--danger" onClick={() => setOpen(false)}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}`} />
        </section>

        {/* INTEGRATION */}
        <section className="docs-section" id="integration">
          <h2 className="docs-h2">06 — Integration Patterns</h2>

          <h3 className="docs-h3">New Vite project (recommended)</h3>
          <CodeBlock code={`# 1. Scaffold
npm create vite@latest my-app -- --template react && cd my-app && npm install

# 2. Replace src/index.css with ZINE-CORE's index.css

# 3. Add fonts to index.html

# 4. Start using components in any .jsx file`} />

          <h3 className="docs-h3">Existing React project</h3>
          <CodeBlock code={`# 1. Create a new file: src/zine-core.css
#    Paste the :root variables + only the component classes you need

# 2. Import it once at your root:
import './zine-core.css'

# 3. Add the font link to your index.html`} />

          <h3 className="docs-h3">Plain HTML (no React)</h3>
          <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/..." rel="stylesheet">
  <link rel="stylesheet" href="zine-core.css">
</head>
<body>
  <!-- All class-based components work without React -->
  <button class="zn-btn zn-btn--primary">Stamp It</button>
  <span class="zn-badge zn-badge--yellow">Raw</span>
</body>
</html>`} />
          <p><strong>Note:</strong> Interactive components (Modal, Accordion, Tabs, Dropzone) need JavaScript state. Use React hooks or vanilla JS event listeners.</p>
        </section>

        {/* CLASS REFERENCE */}
        <section className="docs-section" id="class-ref">
          <h2 className="docs-h2">07 — Class Reference</h2>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead>
                <tr><th>Class</th><th>Description</th></tr>
              </thead>
              <tbody>
                {CLASSES.map(([cls, desc]) => (
                  <tr key={cls}>
                    <td><code>{cls}</code></td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CUSTOMISE */}
        <section className="docs-section" id="customise">
          <h2 className="docs-h2">08 — Customisation</h2>
          <p>Override any design token in <code>:root</code> to retheme the entire library instantly:</p>
          <CodeBlock code={`/* Example: muted palette */
:root {
  --acid-yellow:    #E8D44D;  /* softer yellow */
  --electric-coral: #E05C4B;  /* terracotta */
  --flat-cobalt:    #2E4B8F;  /* navy */
  --shadow:         4px 4px 0px var(--near-black); /* smaller shadow */
}`} />
          <p>To add your own component following the same conventions:</p>
          <CodeBlock code={`.my-component {
  border: var(--border);
  box-shadow: var(--shadow);
  font-family: var(--font-mono);
  transition: var(--transition);
}
.my-component:hover {
  transform: translate(-3px, -3px);
  box-shadow: var(--shadow-hover);
}`} />

          <div style={{ marginTop: '2rem' }}>
            <button className="zn-btn zn-btn--primary" onClick={() => navigate('/components')}>
              Browse All Components →
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
