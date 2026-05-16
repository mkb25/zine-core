import { useState, useCallback, useEffect } from 'react'

function CopyBtn({ code }) {
  const [copied, setCopied] = useState(false)
  return (
    <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) }}>
      {copied ? '✓ copied' : '< copy />'}
    </button>
  )
}

function Section({ id, title, desc, code, children }) {
  return (
    <section className="component-section" id={id}>
      <h2 className="section-header">{title}</h2>
      <p className="section-desc">{desc}</p>
      <div className="preview-panel">
        <CopyBtn code={code} />
        {children}
      </div>
    </section>
  )
}

function ButtonsSection() {
  return (
    <Section id="buttons" title="Buttons" desc="Primary, secondary, danger, ghost. Every press feels like stamping ink." code={`<button className="zn-btn zn-btn--primary">Primary</button>`}>
      <p className="preview-label">Default</p>
      <div className="preview-row">
        <button className="zn-btn zn-btn--primary">Primary</button>
        <button className="zn-btn zn-btn--secondary">Secondary</button>
        <button className="zn-btn zn-btn--danger">Danger</button>
        <button className="zn-btn zn-btn--ghost">Ghost</button>
      </div>
      <p className="preview-label">Disabled</p>
      <div className="preview-row">
        <button className="zn-btn zn-btn--primary" disabled>Primary</button>
        <button className="zn-btn zn-btn--secondary" disabled>Secondary</button>
        <button className="zn-btn zn-btn--danger" disabled>Danger</button>
      </div>
    </Section>
  )
}

function InputsSection() {
  return (
    <Section id="inputs" title="Inputs" desc="Thick underline-only fields. Errors get a red slash." code={`<div className="zn-input-wrap">\n  <label>Username</label>\n  <input className="zn-input" placeholder="your_handle" />\n</div>`}>
      <div className="preview-row" style={{ flexDirection:'column', alignItems:'flex-start', gap:'1.5rem' }}>
        <div className="zn-input-wrap"><label>Username</label><input className="zn-input" type="text" placeholder="your_handle" /></div>
        <div className="zn-input-wrap"><label>Password</label><input className="zn-input" type="password" placeholder="••••••••" /></div>
        <div className="zn-input-wrap"><label>Search</label><input className="zn-input" type="search" placeholder="find something..." /></div>
      </div>
      <p className="preview-label" style={{ marginTop:'1.5rem' }}>Error State</p>
      <div className="preview-row">
        <div className="zn-input-wrap error">
          <label>Email</label>
          <input className="zn-input" defaultValue="bad@email" />
          <span className="zn-input-error">→ invalid email format</span>
        </div>
      </div>
    </Section>
  )
}

function BadgesSection() {
  const [tags, setTags] = useState(['react','brutalist','zine'])
  return (
    <Section id="badges" title="Badges" desc="Colored fills, dismissible ×, blinking dot indicator." code={`<span className="zn-badge zn-badge--yellow">Tag</span>`}>
      <p className="preview-label">Variants</p>
      <div className="preview-row">
        <span className="zn-badge zn-badge--yellow">Design</span>
        <span className="zn-badge zn-badge--coral">Urgent</span>
        <span className="zn-badge zn-badge--cobalt">v2.0</span>
        <span className="zn-badge zn-badge--outline">Draft</span>
      </div>
      <p className="preview-label">Dismissible</p>
      <div className="preview-row">
        {tags.map(t => (
          <span key={t} className="zn-badge zn-badge--yellow">{t}
            <button className="dismiss" onClick={() => setTags(ts => ts.filter(x => x !== t))}>×</button>
          </span>
        ))}
      </div>
      <p className="preview-label">Status</p>
      <div className="preview-row">
        <span className="zn-badge zn-badge--outline"><span className="blink-dot"></span> Online</span>
        <span className="zn-badge zn-badge--outline"><span className="blink-dot" style={{background:'#FF3D3D'}}></span> Recording</span>
      </div>
    </Section>
  )
}

function CardsSection() {
  return (
    <Section id="cards" title="Cards" desc="Info, image, action — hard shadows like stacked paper." code={`<div className="zn-card"><div className="zn-card-body"><h3 className="zn-card-title">Title</h3></div></div>`}>
      <div className="preview-row" style={{alignItems:'flex-start'}}>
        <div className="zn-card"><div className="zn-card-body"><h3 className="zn-card-title">Info Card</h3><p className="zn-card-text">Raw information, no fluff.</p></div></div>
        <div className="zn-card"><div className="zn-card-img">[ image ]</div><div className="zn-card-body"><h3 className="zn-card-title">Image Card</h3><p className="zn-card-text">Hard-edged container.</p></div></div>
        <div className="zn-card"><div className="zn-card-body"><h3 className="zn-card-title">Action Card</h3><p className="zn-card-text">Footer buttons for direct action.</p></div><div className="zn-card-footer"><button className="zn-btn zn-btn--primary">Accept</button><button className="zn-btn zn-btn--secondary">Decline</button></div></div>
      </div>
    </Section>
  )
}

function ToggleSection({ theme, toggleTheme }) {
  const [c1,setC1]=useState(true)
  const [s1,setS1]=useState(false); const [s2,setS2]=useState(true)
  return (
    <Section id="toggles" title="Toggles" desc="Chunky checkboxes and switches. Yellow floods on active." code={`<input type="checkbox" className="zn-checkbox" />`}>
      <p className="preview-label">Checkbox</p>
      <div className="preview-row">
        <label className="zn-toggle-wrap"><input type="checkbox" className="zn-checkbox" checked={c1} onChange={()=>setC1(!c1)} /><span>Notifications</span></label>
        <label className="zn-toggle-wrap"><input type="checkbox" className="zn-checkbox" checked={theme === 'dark'} onChange={toggleTheme} /><span>Dark mode</span></label>
      </div>
      <p className="preview-label">Switch</p>
      <div className="preview-row">
        <div className="zn-toggle-wrap" onClick={()=>setS1(!s1)}><div className={`zn-switch${s1?' active':''}`}></div><span>Auto-save</span></div>
        <div className="zn-toggle-wrap" onClick={()=>setS2(!s2)}><div className={`zn-switch${s2?' active':''}`}></div><span>Publish live</span></div>
      </div>
    </Section>
  )
}

function AlertsSection() {
  return (
    <Section id="alerts" title="Alerts" desc="Info, warning, error, success — bold left color bar." code={`<div className="zn-alert zn-alert--info"><span className="zn-alert-icon">ℹ</span><div><div className="zn-alert-label">Info</div></div></div>`}>
      <div className="preview-row" style={{flexDirection:'column',gap:'1rem',alignItems:'stretch'}}>
        {[['info','ℹ','Information','Neutral informational message.'],['warning','⚠','Warning','Something might go wrong.'],['error','✕','Error','Something broke.'],['success','✓','Success','It worked!']].map(([t,i,l,m])=>(
          <div key={t} className={`zn-alert zn-alert--${t}`}><span className="zn-alert-icon">{i}</span><div><div className="zn-alert-label">{l}</div><div className="zn-alert-msg">{m}</div></div></div>
        ))}
      </div>
    </Section>
  )
}

function ModalSection() {
  const [open,setOpen]=useState(false)
  return (
    <Section id="modal" title="Modal" desc="Giant header, dark overlay, two CTA buttons." code={`<div className="zn-modal-overlay"><div className="zn-modal">...</div></div>`}>
      <div className="preview-row"><button className="zn-btn zn-btn--primary" onClick={()=>setOpen(true)}>Open Modal</button></div>
      {open&&<div className="zn-modal-overlay" onClick={()=>setOpen(false)}><div className="zn-modal" onClick={e=>e.stopPropagation()}><div className="zn-modal-header">Are You Sure?</div><div className="zn-modal-body">This action is irreversible.</div><div className="zn-modal-footer"><button className="zn-btn zn-btn--secondary" onClick={()=>setOpen(false)}>Cancel</button><button className="zn-btn zn-btn--danger" onClick={()=>setOpen(false)}>Confirm Delete</button></div></div></div>}
    </Section>
  )
}

function AccordionSection() {
  const [idx,setIdx]=useState(0)
  const items=[['What is Neo-Brutalism?','A design movement embracing raw aesthetics — thick borders, hard shadows, bold colors.'],['Why no border-radius?','Sharp edges are honest. Maximum 4px, and that\'s generous.'],['Can I use this in production?','Yes. Copy the code, adapt it, make it yours.'],['Why does it look "broken"?','It\'s deliberately misaligned. Visual tension makes it feel alive.']]
  return (
    <Section id="accordion" title="Accordion" desc="FAQ-style. Open state floods yellow." code={`<div className="zn-accordion">...</div>`}>
      <div className="zn-accordion">{items.map(([q,a],i)=>(
        <div className="zn-accordion-item" key={i}>
          <button className={`zn-accordion-trigger${idx===i?' open':''}`} onClick={()=>setIdx(idx===i?-1:i)}>{q}<span className="zn-accordion-icon">+</span></button>
          <div className={`zn-accordion-panel${idx===i?' open':''}`}><div className="zn-accordion-panel-inner">{a}</div></div>
        </div>
      ))}</div>
    </Section>
  )
}

function TooltipSection() {
  return (
    <Section id="tooltip" title="Tooltip" desc="Hard black bg, mono white text, no rounded corners." code={`<span className="zn-tooltip-wrap"><button>Hover</button><span className="zn-tooltip">Text</span></span>`}>
      <div className="preview-row" style={{paddingTop:'2.5rem'}}>
        <span className="zn-tooltip-wrap"><button className="zn-btn zn-btn--primary">Hover Me</ button><span className="zn-tooltip">Raw and direct</span></span>
        <span className="zn-tooltip-wrap"><button className="zn-btn zn-btn--secondary">More Info</button><span className="zn-tooltip">Additional context</span></span>
      </div>
    </Section>
  )
}

function AvatarSection() {
  return (
    <Section id="avatars" title="Avatars" desc="Initials-based, stacked with overlap. Online indicators." code={`<div className="zn-avatar">AB</div>`}>
      <p className="preview-label">Individual</p>
      <div className="preview-row">
        <div className="zn-avatar">ZC</div>
        <div className="zn-avatar zn-avatar--coral">NB</div>
        <div className="zn-avatar zn-avatar--cobalt">PK</div>
        <div className="zn-avatar">MR<span className="online-dot"></span></div>
      </div>
      <p className="preview-label">Group</p>
      <div className="preview-row">
        <div className="zn-avatar-group">
          <div className="zn-avatar">ZC</div>
          <div className="zn-avatar zn-avatar--coral">NB</div>
          <div className="zn-avatar zn-avatar--cobalt">PK</div>
          <div className="zn-avatar zn-avatar--coral">+3</div>
        </div>
      </div>
    </Section>
  )
}

function ProgressSection() {
  const [val,setVal]=useState(68)
  return (
    <Section id="progress" title="Progress Bar" desc="Striped fill, hard border, live slider." code={`<div className="zn-progress-track"><div className="zn-progress-fill" style={{width:'68%'}}><span className="zn-progress-label">68%</span></div></div>`}>
      <div className="preview-row" style={{flexDirection:'column',gap:'1.25rem',alignItems:'stretch'}}>
        <div><p className="preview-label">Live (drag to adjust)</p>
          <div className="zn-progress-track"><div className="zn-progress-fill" style={{width:`${val}%`}}><span className="zn-progress-label">{val}%</span></div></div>
          <input type="range" min={0} max={100} value={val} onChange={e=>setVal(+e.target.value)} style={{marginTop:'0.75rem',width:'100%'}} />
        </div>
        <div><p className="preview-label">Coral 45%</p><div className="zn-progress-track"><div className="zn-progress-fill zn-progress-fill--coral" style={{width:'45%'}}><span className="zn-progress-label">45%</span></div></div></div>
        <div><p className="preview-label">Cobalt 90%</p><div className="zn-progress-track"><div className="zn-progress-fill zn-progress-fill--cobalt" style={{width:'90%'}}><span className="zn-progress-label">90%</span></div></div></div>
      </div>
    </Section>
  )
}

function TabsSection() {
  const [tab,setTab]=useState(0)
  const tabs=[{label:'Overview',content:'Raw, unfiltered. No hero images, no carousels.'},{label:'Details',content:'Every pixel is intentional. The border is 3px because 2px felt cowardly.'},{label:'Code',content:'<div className="zn-tabs">…</div>'}]
  return (
    <Section id="tabs" title="Tabs" desc="Active tab stamps yellow and pops upward." code={`<div className="zn-tabs"><div className="zn-tab-list"><button className="zn-tab-btn active">Tab 1</button></div><div className="zn-tab-panel">Content</div></div>`}>
      <div className="zn-tabs">
        <div className="zn-tab-list">{tabs.map((t,i)=><button key={i} className={`zn-tab-btn${tab===i?' active':''}`} onClick={()=>setTab(i)}>{t.label}</button>)}</div>
        <div className="zn-tab-panel">{tabs[tab].content}</div>
      </div>
    </Section>
  )
}

function KbdSection() {
  return (
    <Section id="kbd" title="Kbd Shortcuts" desc="Keys with hard bottom shadow. Mono all the way." code={`<span className="zn-kbd"><kbd className="zn-key">⌘</kbd><span className="zn-kbd-plus">+</span><kbd className="zn-key">K</kbd></span>`}>
      <div className="preview-row" style={{gap:'1.5rem',flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          <p className="preview-label">Common</p>
          <span className="zn-kbd"><kbd className="zn-key">⌘</kbd><span className="zn-kbd-plus">+</span><kbd className="zn-key">K</kbd></span>
          <span className="zn-kbd"><kbd className="zn-key">Ctrl</kbd><span className="zn-kbd-plus">+</span><kbd className="zn-key">Shift</kbd><span className="zn-kbd-plus">+</span><kbd className="zn-key">P</kbd></span>
          <span className="zn-kbd"><kbd className="zn-key">Esc</kbd></span>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
          <p className="preview-label">Color Variants</p>
          <span className="zn-kbd"><kbd className="zn-key zn-key--yellow">⌘</kbd><span className="zn-kbd-plus">+</span><kbd className="zn-key">Z</kbd></span>
          <span className="zn-kbd"><kbd className="zn-key zn-key--coral">Del</kbd></span>
        </div>
      </div>
    </Section>
  )
}

function StatsSection() {
  return (
    <Section id="stats" title="Stat Cards" desc="Big numbers, color-coded top bar, delta indicator." code={`<div className="zn-stat-grid"><div className="zn-stat"><div className="zn-stat-value">4,291</div><div className="zn-stat-label">Users</div></div></div>`}>
      <div className="zn-stat-grid">
        {[['4,291','Total Users','↑ +12.4%','up'],['98%','Uptime','↓ −0.3%','down'],['$18K','Revenue','↑ +6.1%','up'],['203ms','Avg Response','↓ +40ms','down']].map(([v,l,d,t])=>(
          <div className="zn-stat" key={l}><div className="zn-stat-value">{v}</div><div className="zn-stat-label">{l}</div><div className={`zn-stat-delta zn-stat-delta--${t}`}>{d}</div></div>
        ))}
      </div>
    </Section>
  )
}

function DropzoneSection() {
  const [dragging,setDragging]=useState(false); const [dropped,setDropped]=useState(null)
  return (
    <Section id="dropzone" title="Dropzone" desc="Dashed border, aggressive hover. Drop a file — zone goes yellow." code={`<div className="zn-dropzone"><input type="file" /><span className="zn-dropzone-icon">⬇</span><div className="zn-dropzone-title">Drop here</div></div>`}>
      <div className={`zn-dropzone${dragging?' dragging':''}`} onDragOver={e=>{e.preventDefault();setDragging(true)}} onDragLeave={()=>setDragging(false)} onDrop={e=>{e.preventDefault();setDragging(false);setDropped(e.dataTransfer.files[0]?.name||'unknown')}}>
        <input type="file" onChange={e=>setDropped(e.target.files[0]?.name||null)} />
        <span className="zn-dropzone-icon">{dropped?'✓':'⬇'}</span>
        <div className="zn-dropzone-title">{dropped||'Drop files here'}</div>
        <div className="zn-dropzone-sub">{dropped?'click to replace':'or click to browse'}</div>
      </div>
    </Section>
  )
}

function PaginationSection() {
  const [page,setPage]=useState(3); const total=8
  return (
    <Section id="pagination" title="Pagination" desc="Active page inverts black-on-yellow. Overlapping borders." code={`<div className="zn-pagination"><button className="zn-page-btn active">1</button></div>`}>
      <div className="preview-row">
        <div className="zn-pagination">
          <button className="zn-page-btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>‹</button>
          {Array.from({length:total},(_,i)=>i+1).map(n=><button key={n} className={`zn-page-btn${page===n?' active':''}`} onClick={()=>setPage(n)}>{n}</button>)}
          <button className="zn-page-btn" onClick={()=>setPage(p=>Math.min(total,p+1))} disabled={page===total}>›</button>
        </div>
      </div>
    </Section>
  )
}

function SliderSection() {
  const [vol,setVol]=useState(72); const [bright,setBright]=useState(40)
  return (
    <Section id="slider" title="Slider" desc="Square thumb, thick track. Value updates in giant Syne type." code={`<input type="range" className="zn-slider" />`}>
      <div className="preview-row" style={{flexDirection:'column',gap:'2rem',alignItems:'stretch'}}>
        <div className="zn-slider-wrap"><div className="zn-slider-label"><span>Volume</span><span className="zn-slider-val">{vol}</span></div><input type="range" className="zn-slider" min={0} max={100} value={vol} onChange={e=>setVol(+e.target.value)} /></div>
        <div className="zn-slider-wrap"><div className="zn-slider-label"><span>Brightness</span><span className="zn-slider-val">{bright}%</span></div><input type="range" className="zn-slider" min={0} max={100} value={bright} onChange={e=>setBright(+e.target.value)} /></div>
      </div>
    </Section>
  )
}

function SpinnerSection() {
  return (
    <Section id="spinner" title="Loaders" desc="Square spinners in stepped frames — mechanical, not digital." code={`<div className="zn-spinner" />`}>
      <p className="preview-label">Spinners</p>
      <div className="zn-spinner-wrap"><div className="zn-spinner"/><div className="zn-spinner zn-spinner--coral"/><div className="zn-spinner zn-spinner--cobalt"/><div className="zn-spinner zn-spinner--lg"/></div>
      <p className="preview-label" style={{marginTop:'1.5rem'}}>Pulse Dots</p>
      <div className="preview-row"><div className="zn-pulse-dot"/><div className="zn-pulse-dot" style={{background:'var(--electric-coral)'}}/><div className="zn-pulse-dot" style={{background:'var(--flat-cobalt)'}}/></div>
    </Section>
  )
}

function TickerSection() {
  return (
    <Section id="ticker" title="Ticker Tape" desc="Unending marquee. Rotated, loud, unyielding." code={`<div className="zn-ticker-wrap"><div className="zn-ticker"><span>TEXT ///</span></div></div>`}>
      <div className="preview-row" style={{overflow:'hidden',padding:'1rem 0'}}>
        <div className="zn-ticker-wrap"><div className="zn-ticker"><span>ACCEPT THE CHAOS ///</span><span>REJECT MODERNITY ///</span><span>EMBRACE THE ZINE ///</span><span>ACCEPT THE CHAOS ///</span><span>REJECT MODERNITY ///</span><span>EMBRACE THE ZINE ///</span></div></div>
      </div>
    </Section>
  )
}

function TicketSection() {
  return (
    <Section id="ticket" title="Gig Ticket" desc="Concert stub. Dashed perforations, CSS barcode." code={`<div className="zn-ticket"><div className="zn-ticket-main">...</div><div className="zn-ticket-stub">...</div></div>`}>
      <div className="preview-row">
        <div className="zn-ticket">
          <div className="zn-ticket-main"><div className="zn-ticket-label">Admit One</div><div className="zn-ticket-title">Punk Rock Show</div><div style={{fontSize:'0.8rem',marginTop:'0.5rem',color:'#555',fontWeight:'600'}}>DOORS: 8PM // 21+ ONLY</div><div className="zn-ticket-barcode"></div></div>
          <div className="zn-ticket-stub"><div className="zn-ticket-stub-text">NO REFUNDS</div></div>
        </div>
      </div>
    </Section>
  )
}

function RedactedSection() {
  return (
    <Section id="redacted" title="Redacted" desc="Hover to reveal. Feels like a leaked document." code={`<span className="zn-redacted">SECRET</span>`}>
      <div className="preview-row" style={{fontSize:'0.95rem',lineHeight:'2'}}>
        <p>According to reports, the incident at the <span className="zn-redacted">underground facility</span> was caused by a <span className="zn-redacted">Class-4 breach</span>. All personnel advised to <span className="zn-redacted">evacuate immediately</span>.</p>
      </div>
    </Section>
  )
}

const NAV_ITEMS = [
  {id:'buttons',label:'Buttons'},{id:'inputs',label:'Inputs'},{id:'badges',label:'Badges'},
  {id:'cards',label:'Cards'},{id:'toggles',label:'Toggle/Switch'},{id:'alerts',label:'Alerts'},
  {id:'modal',label:'Modal'},{id:'accordion',label:'Accordion'},{id:'tooltip',label:'Tooltip'},
  {id:'avatars',label:'Avatars'},{id:'progress',label:'Progress Bar'},{id:'tabs',label:'Tabs'},
  {id:'kbd',label:'Kbd Shortcuts'},{id:'stats',label:'Stat Cards'},{id:'dropzone',label:'Dropzone'},
  {id:'pagination',label:'Pagination'},{id:'slider',label:'Slider'},{id:'spinner',label:'Loaders'},
  {id:'ticker',label:'Ticker'},{id:'ticket',label:'Gig Ticket'},{id:'redacted',label:'Redacted'},
]

export default function ComponentsPage() {
  const [sidebarOpen,setSidebarOpen]=useState(false)
  const [activeSection,setActiveSection]=useState('buttons')
  const [theme, setTheme] = useState(localStorage.getItem('docs-theme') || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('docs-theme', newTheme)
  }

  const handleNavClick=useCallback((id)=>{setActiveSection(id);setSidebarOpen(false)},[])

  useEffect(()=>{
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActiveSection(e.target.id)}),{rootMargin:'-20% 0px -60% 0px',threshold:0})
    document.querySelectorAll('.component-section').forEach(s=>obs.observe(s))
    return ()=>obs.disconnect()
  },[])

  return (
    <div className="app-layout" data-theme={theme}>
      <button className={`hamburger${sidebarOpen?' open':''}`} onClick={()=>setSidebarOpen(!sidebarOpen)}><span/><span/><span/></button>
      <aside className={`sidebar${sidebarOpen?' open':''}`}>
        <div className="sidebar-logo">ZINE<span>—</span>CORE</div>
        <div className="sidebar-tagline">Component Library</div>
        
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

        <ul className="sidebar-nav">
          {NAV_ITEMS.map(item=>(
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection===item.id?'active':''} onClick={()=>handleNavClick(item.id)}>{'// '}{item.label}</a>
            </li>
          ))}
        </ul>
        <div style={{fontSize:'0.6rem',color:'#aaa',marginTop:'1rem'}}>v1.0.0 — built raw</div>
      </aside>
      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title"><span className="highlight-yellow">ZINE</span><span className="highlight-coral">—</span>CORE</h1>
          <p className="hero-sub">Neo-brutalist components. Copy. Paste. Break things.</p>
        </div>
        <ButtonsSection/>
        <InputsSection/>
        <BadgesSection/>
        <CardsSection/>
        <ToggleSection theme={theme} toggleTheme={toggleTheme}/>
        <AlertsSection/>
        <ModalSection/>
        <AccordionSection/>
        <TooltipSection/>
        <AvatarSection/>
        <ProgressSection/>
        <TabsSection/>
        <KbdSection/>
        <StatsSection/>
        <DropzoneSection/>
        <PaginationSection/>
        <SliderSection/>
        <SpinnerSection/>
        <TickerSection/>
        <TicketSection/>
        <RedactedSection/>
      </main>
    </div>
  )
}
