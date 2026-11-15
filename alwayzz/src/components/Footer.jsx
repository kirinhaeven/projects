import { ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Plans', href: '#plans' },
  { label: 'Team', href: '#team' },
  { label: 'FAQs', href: '#faqs' },
]

const LEGAL = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
]

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#top" aria-label="Alwayzz home">
            <span>Alwayzz</span>
            <span className="brand-mark">®</span>
          </a>
          <p className="footer-tagline">
            Premium creative, delivered on the date you said.
          </p>
          <a className="footer-mail" href="mailto:hello@alwayzz.studio">
            hello@alwayzz.studio
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h2 className="footer-heading">Studio</h2>
          <ul className="footer-links">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-side">
          <h2 className="footer-heading">Elsewhere</h2>
          <ul className="footer-links">
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer noopener">
                X
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <p className="footer-copy">© {new Date().getFullYear()} Alwayzz. All rights reserved.</p>
        <ul className="footer-legal">
          {LEGAL.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
