import { useState, useEffect, useCallback } from 'react'
import { projects, getCategoryLabel, getCategoryAspect } from '../data/projects'
import { projectImageUrl } from '../utils/images'

const INTERVAL = 4500

export default function ProjectCarousel({ category, onViewAll }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const filtered = projects.filter((p) => p.category === category)
  const aspect = getCategoryAspect(category)
  const count = filtered.length

  const next = useCallback(() => {
    if (count === 0) return
    setIndex((i) => (i + 1) % count)
  }, [count])

  useEffect(() => {
    setIndex(0)
  }, [category])

  useEffect(() => {
    if (paused || count <= 1) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [paused, next, count])

  if (count === 0) {
    return (
      <div className="carousel carousel--empty">
        <p>No projects in this category yet.</p>
      </div>
    )
  }

  return (
    <div
      className={`carousel carousel--${aspect}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__fade">
        <div className="carousel__viewport">
          <div
            className="carousel__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {filtered.map((p) => (
              <div key={p.id} className="carousel__slide">
                <article className="carousel-card">
                  <div className={`carousel-card__image carousel-card__image--${aspect}`}>
                    {projectImageUrl(p.image) ? (
                      <img src={projectImageUrl(p.image)} alt={p.title} />
                    ) : (
                      <span className="carousel-card__letter">{p.title.charAt(0)}</span>
                    )}
                  </div>
                  <div className="carousel-card__body">
                    <span className="carousel-card__category">
                      {getCategoryLabel(p.category)}
                    </span>
                    <h3 className="carousel-card__title">{p.title}</h3>
                    <p className="carousel-card__desc">{p.description}</p>
                    <div className="carousel-card__tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="carousel-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={() => setIndex((i) => (i - 1 + count) % count)}
          aria-label="Previous project"
          disabled={count <= 1}
        >
          ‹
        </button>

        <div className="carousel__dots" role="tablist" aria-label="Project slides">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${p.title}`}
              className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={next}
          aria-label="Next project"
          disabled={count <= 1}
        >
          ›
        </button>
      </div>

      <button type="button" className="btn btn--outline carousel__view-all" onClick={onViewAll}>
        View All Projects
      </button>
    </div>
  )
}
