import HeroGrid from './HeroGrid'

export default function Hero({ onViewProjects }) {
  return (
    <section id="home" className="hero">
      <HeroGrid />
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Siji Creates</h1>
        <p className="hero__tagline">
        College Instructor, Web Developer, Creative Designer. <br/>
        I Create. I Build. I Inspire.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onViewProjects}>
            View Projects
          </button>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
