import { certificates, cvFile } from '../data/certificates'

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional credentials and completed programs that support my work.
        </p>
      </div>

      <div className="certifications__cv">
        <p className="certifications__cv-text">
          Download my full resume for a complete overview of my experience and skills.
        </p>
        <a
          href={cvFile.path}
          download={cvFile.fileName}
          className="btn btn--primary certifications__cv-btn"
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="certifications__grid">
        {certificates.map((cert) => (
          <article key={cert.id} className="cert-card">
            {/* <div className="cert-card__badge">
              <span className="cert-card__icon" aria-hidden="true">✓</span>
            </div> */}
            <div className="cert-card__body">
              <h3 className="cert-card__image"><img src={cert.image} alt={cert.title} /></h3>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__issuer">{cert.issuer}</p>
              <p className="cert-card__date">{cert.date}</p>
              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  className="cert-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
