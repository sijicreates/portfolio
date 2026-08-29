import { useEffect } from 'react'
import { categories, projects, getCategoryLabel, getCategoryAspect } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsModal({ open, onClose, category, onCategoryChange }) {
  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const filtered = projects.filter((p) => p.category === category)
  const aspect = getCategoryAspect(category)
  const label = getCategoryLabel(category)

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />

      <div className={`modal__panel modal__panel--${aspect}`}>
        <header className="modal__header">
          <div className="modal__header-left">
            <h2 id="modal-title" className="modal__title">All Projects</h2>
            <label className="modal__select-wrap">
              <span className="sr-only">Category</span>
              <select
                className="modal__select"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
              >
                {categories.map(({ id, label: catLabel }) => (
                  <option key={id} value={id}>
                    {catLabel}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close projects"
          >
            ×
          </button>
        </header>

        <div className="modal__body">
          <p className="modal__category-label">{label}</p>
          {filtered.length === 0 ? (
            <p className="modal__empty">No projects in this category yet.</p>
          ) : (
            <div className={`modal__grid modal__grid--${aspect}`}>
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} aspect={aspect} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
