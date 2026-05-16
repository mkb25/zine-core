import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const FEATURES = [
  { icon: '⬛', title: 'Hard Borders', desc: '3px solid black on everything. No soft shadows, no gradients pretending to be depth.' },
  { icon: '🟡', title: 'Acid Colors', desc: 'Yellow, coral, cobalt. A palette that was chosen, not defaulted to.' },
  { icon: '✂️', title: 'Copy-Paste Ready', desc: 'Every component has a copy button. No packages, no dependencies to chase.' },
  { icon: '📐', title: 'Intentional Chaos', desc: 'Slight rotations, negative margins, overlapping type. Broken by design.' },
  { icon: '⚡', title: 'React + CSS', desc: 'No CSS-in-JS, no utility bloat. Just React state and one CSS file.' },
  { icon: '📱', title: 'Responsive', desc: 'Sidebar collapses, type scales down, layout adapts. Still brutal at 375px.' },
]

const PREVIEW_ITEMS = [
  { label: 'Primary Button', el: <button className="zn-btn zn-btn--primary">Click Me</button> },
  { label: 'Danger Button',  el: <button className="zn-btn zn-btn--danger">Delete</button> },
  { label: 'Badge',          el: <span className="zn-badge zn-badge--yellow">NEW</span> },
  { label: 'Cobalt Badge',   el: <span className="zn-badge zn-badge--cobalt">v2.0</span> },
]

function QSCopy({ code }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button className={`qs-copy-btn${copied ? ' copied' : ''}`} onClick={handleCopy}>
      {copied ? '✓' : 'copy'}
    </button>
  )
}

export default function HomePage() {
  const navigate = useNavigate()
  const featRef = useRef(null)

  useEffect(() => {
    const cards = featRef.current?.querySelectorAll('.feat-card')
    if (!cards) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.1 })
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-stamp">// component library</div>
          <h1 className="home-hero-title">
            ZINE<em>—</em>CORE
          </h1>
          <p className="home-hero-sub">
            A neo-brutalist React component library built for designers who reject polish.
            Raw edges. Acid color. Zero apology.
          </p>
          <div className="home-hero-ctas">
            <button className="zn-btn zn-btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }} onClick={() => navigate('/components')}>
              Browse Components →
            </button>
            <button className="zn-btn zn-btn--secondary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }} onClick={() => navigate('/docs')}>
              Read Docs
            </button>
          </div>
        </div>

        {/* decorative preview strip */}
        <div className="home-hero-preview">
          {PREVIEW_ITEMS.map((item, i) => (
            <div key={i} className="home-preview-chip">
              <span className="home-preview-label">{item.label}</span>
              {item.el}
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="home-stats-bar">
        <div className="home-stat-item"><strong>21</strong> Components</div>
        <div className="home-stat-item"><strong>0</strong> npm dependencies</div>
        <div className="home-stat-item"><strong>1</strong> CSS file</div>
        <div className="home-stat-item"><strong>100%</strong> Copy-paste</div>
      </div>

      {/* ── Philosophy ── */}
      <section className="home-philosophy">
        <div className="home-philosophy-inner">
          <div className="phil-label">// Philosophy</div>
          <h2 className="phil-title">What is a <span className="highlight">Zine</span>?</h2>
          <div className="phil-content">
            <p>
              A <strong>zine</strong> (derived from fanzine) is a self-published, small-circulation work of original or appropriated texts and images. 
              It’s the original DIY medium—born from Xerox machines, glue sticks, and a total disregard for "proper" layout.
            </p>
            <p>
              <strong>ZINE-CORE</strong> is a tribute to that energy. It rejects the polished, rounded, soft-shadowed aesthetic of modern SaaS. 
              It’s built for the web that still wants to feel physical, stamped, and raw.
            </p>
          </div>
          <div className="phil-stamp">EST. 2024</div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="home-section" ref={featRef}>
        <h2 className="home-section-title">Why Zine-Core?</h2>
        <p className="home-section-sub">Because polished SaaS components make everything look the same. This doesn't.</p>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="feat-card" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick start ── */}
      <section className="home-section home-section--dark">
        <h2 className="home-section-title" style={{ color: 'var(--acid-yellow)' }}>Quick Start</h2>
        <p className="home-section-sub" style={{ color: '#aaa' }}>Three steps and you're stamping components.</p>
        <div className="qs-steps">
          <div className="qs-step">
            <div className="qs-num">01</div>
            <div className="qs-body">
              <div className="qs-step-title">Add the fonts <QSCopy code={`<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">`} /></div>
              <pre className="qs-code">{`<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">`}</pre>
            </div>
          </div>
          <div className="qs-step">
            <div className="qs-num">02</div>
            <div className="qs-body">
              <div className="qs-step-title">Copy the CSS variables <QSCopy code={`:root {
  --acid-yellow: #F5F500;
  --electric-coral: #FF3D3D;
  --flat-cobalt: #1A1AFF;
  --near-black: #0D0D0D;
  --border: 3px solid var(--near-black);
  --shadow: 6px 6px 0px var(--near-black);
}`} /></div>
              <pre className="qs-code">{`:root {
  --acid-yellow: #F5F500;
  --electric-coral: #FF3D3D;
  --flat-cobalt: #1A1AFF;
  --near-black: #0D0D0D;
  --border: 3px solid var(--near-black);
  --shadow: 6px 6px 0px var(--near-black);
}`}</pre>
            </div>
          </div>
          <div className="qs-step">
            <div className="qs-num">03</div>
            <div className="qs-body">
              <div className="qs-step-title">Pick a component &amp; paste <QSCopy code={`<button className="zn-btn zn-btn--primary">
  Stamp It
</button>`} /></div>
              <pre className="qs-code">{`<button className="zn-btn zn-btn--primary">
  Stamp It
</button>`}</pre>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="zn-btn zn-btn--primary" onClick={() => navigate('/docs')}>Full Setup Guide →</button>
          <button className="zn-btn zn-btn--secondary" style={{ color: '#fff', borderColor: '#fff' }} onClick={() => navigate('/components')}>Browse All 21 Components</button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <span>ZINE<em>—</em>CORE</span>
        <span>// v1.0.0 — built raw, not polished</span>
      </footer>
    </div>
  )
}
