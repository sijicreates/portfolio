import { getCategoryAspect } from '../data/projects'

export default function ProjectCard({ project, aspect = 'landscape' }) {
  const cardAspect = aspect || getCategoryAspect(project.category)

  return (
    <article className="project-card">
      <div className={`project-card__image project-card__image--${cardAspect}`}>
        <span className="project-card__placeholder">{project.title.charAt(0)}</span>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="project-card__link">
          View Project →
        </a>
      </div>
    </article>
  )
}
