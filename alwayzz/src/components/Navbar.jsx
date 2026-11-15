import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const LINKS = ['Projects', 'Plans', 'Team', 'FAQs', 'Get in Touch']

function slugify(label) {
  return '#' + label.toLowerCase().replace(/\s+/g, '-')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Alwayzz home">
          <span>Alwayzz</span>
          <span className="brand-mark">®</span>
        </a>

        <button
          type="button"
          className={open ? 'menu-btn is-open' : 'menu-btn'}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-drawer"
        >
          <span>Menu</span>
          <ChevronUp size={16} strokeWidth={2} className="menu-chevron" aria-hidden="true" />
        </button>
      </header>

      <div
        id="site-drawer"
        className={open ? 'drawer is-open' : 'drawer'}
        aria-hidden={!open}
      >
        <nav className="drawer-nav" aria-label="Main">
          {LINKS.map((label) => (
            <a key={label} href={slugify(label)} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {label}
            </a>
          ))}
        </nav>
        <p className="drawer-footer">© {new Date().getFullYear()} Alwayzz. All rights reserved.</p>
      </div>
    </>
  )
}
