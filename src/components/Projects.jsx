import ProjectCarousel from './ProjectCarousel'
import { categories } from '../data/projects'

export default function Projects({ activeCategory, onCategoryChange, onViewAll }) {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Select a category to preview work, or view the full collection in a modal.
        </p>
      </div>

      <div className="projects__tabs" role="tablist" aria-label="Project categories">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeCategory === id}
            className={`projects__tab ${activeCategory === id ? 'projects__tab--active' : ''}`}
            onClick={() => onCategoryChange(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <ProjectCarousel category={activeCategory} onViewAll={onViewAll} />
    </section>
  )
}
