import { useState, useCallback, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [showTop, setShowTop] = useState(false)
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button 
      className={`scroll-top-btn${showTop ? ' visible' : ''}`} 
      onClick={scrollToTop} 
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
