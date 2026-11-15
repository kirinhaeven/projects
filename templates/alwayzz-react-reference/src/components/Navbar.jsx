import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const LINKS = [
  { label: 'Projects', href: '#work' },
  { label: 'Plans', href: '#plans' },
  { label: 'Team', href: '#team' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Get in Touch', href: '#get-in-touch' },
]

const SECTION_IDS = ['#work', '#services', '#process', '#plans', '#team', '#faqs', '#get-in-touch']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const buttonRef = useRef(null)
  const drawerRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  /* Lock the page behind the drawer without letting the scrollbar vanish and
     shift the layout sideways. */
  useEffect(() => {
    if (!open) return undefined

    const { body } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
    }
  }, [open])

  /* Move focus into the drawer, keep it in there, and give it back on close. */
  useEffect(() => {
    if (!open) {
      if (drawerRef.current?.contains(document.activeElement)) buttonRef.current?.focus()
      return undefined
    }

    const drawer = drawerRef.current
    const first = drawer?.querySelector('a, button')
    first?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = drawer
        ? Array.from(
            drawer.querySelectorAll('a[href], button:not([disabled])'),
          ).filter((node) => node.offsetParent !== null)
        : []
      if (focusable.length === 0) return

      const firstNode = focusable[0]
      const lastNode = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault()
        lastNode.focus()
      } else if (!event.shiftKey && document.activeElement === lastNode) {
        event.preventDefault()
        firstNode.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  /* Scroll spy, so the open menu shows where you are on the page. */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.querySelector(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
          ref={buttonRef}
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
        ref={drawerRef}
        className={open ? 'drawer is-open' : 'drawer'}
        aria-hidden={!open}
      >
        <nav className="drawer-nav" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              tabIndex={open ? 0 : -1}
              aria-current={active === link.href ? 'true' : undefined}
              data-active={active === link.href || undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="drawer-footer">© {new Date().getFullYear()} Alwayzz. All rights reserved.</p>
      </div>
    </>
  )
}
