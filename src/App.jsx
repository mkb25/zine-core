import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DocsPage from './pages/DocsPage'
import ComponentsPage from './pages/ComponentsPage'

function TopNav() {
  const navigate = useNavigate()
  return (
    <nav className="topnav">
      <div className="topnav-logo" onClick={() => navigate('/')}>
        ZINE<em>—</em>CORE
      </div>
      <div className="topnav-links">
        <NavLink to="/" end className={({ isActive }) => `topnav-link${isActive ? ' active' : ''}`}>Home</NavLink>
        <NavLink to="/components" className={({ isActive }) => `topnav-link${isActive ? ' active' : ''}`}>Components</NavLink>
        <NavLink to="/docs" className={({ isActive }) => `topnav-link${isActive ? ' active' : ''}`}>Docs</NavLink>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
