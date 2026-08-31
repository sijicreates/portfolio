import { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skilla', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleNavClick}>
        Portfolio
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="navbar__toggle-close" aria-hidden="true">
              ×
            </span>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={handleNavClick}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
