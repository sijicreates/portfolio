import { emails, socials } from '../data/socials'

function SocialIcon({ id }) {
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.6.4-1 1-1z"
        />
      </svg>
    )
  }

  if (id === 'behance') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8.6 11.4c.9-.4 1.4-1.1 1.4-2.2 0-2-1.5-3.2-4-3.2H2v12h4.3c2.6 0 4.5-1.3 4.5-3.6 0-1.6-.8-2.6-2.2-3zm-4.4-3h1.8c.9 0 1.6.4 1.6 1.3S7 11 6 11H4.2V8.4zm2 8.2H4.2v-3.2H6.3c1.2 0 1.9.5 1.9 1.6s-.8 1.6-2 1.6zM22 7.6h-6.2V6H22v1.6zM16.7 18c2.8 0 4.8-1.7 4.8-4.4 0-2.1-1.2-3.4-3.1-3.8 1.4-.5 2.2-1.6 2.2-3.1 0-2.3-1.8-3.7-4.6-3.7h-6v14.9h6.7zm-.6-12.2c1.4 0 2.2.6 2.2 1.8s-.8 1.8-2.2 1.8h-3.2V5.8h3.2zm.3 10.4h-3.5v-3.7h3.5c1.5 0 2.4.7 2.4 1.9s-1 1.8-2.4 1.8z"
        />
      </svg>
    )
  }

  if (id === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.5 3c.4 2.4 1.8 4.1 4.2 4.4v2.6c-1.4 0-2.7-.5-3.8-1.3v6.6c0 3.4-2.7 6.1-6.2 6.1S2.5 18.7 2.5 15.3 5.2 9.2 8.7 9.2c.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-1.9 0-3.4 1.6-3.4 3.5s1.5 3.5 3.4 3.5 3.4-1.6 3.4-3.5V3h2.4z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 3.2-8 5-8-5V7l8 5 8-5v1.2z"
      />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__socials">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="footer__social"
            aria-label={item.label}
            target={item.id === 'email' ? undefined : '_blank'}
            rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
          >
            <SocialIcon id={item.id} />
          </a>
        ))}
      </div>

      <div className="footer__emails">
        {emails.map((email) => (
          <a key={email} href={`mailto:${email}`}>
            {email}
          </a>
        ))}
      </div>

      <p>&copy; 2022 Siji Creates. All rights reserved.</p>
    </footer>
  )
}
