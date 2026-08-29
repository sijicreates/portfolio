import { useState, useEffect, useCallback, useRef } from 'react'
import { projects, getCategoryLabel, getCategoryAspect } from '../data/projects'
import { projectImageUrl } from '../utils/images'

const INTERVAL = 4500
const CAROUSEL_LIMIT = 5

export default function ProjectCarousel({ category, onViewAll }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const viewportRef = useRef(null)

  const slides = projects.filter((p) => p.category === category).slice(0, CAROUSEL_LIMIT)
  const aspect = getCategoryAspect(category)
  const count = slides.length

  const isMobile = () =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

  const goTo = useCallback((nextIndex) => {
    if (count === 0) return
    const wrapped = (nextIndex + count) % count
    setIndex(wrapped)

    if (isMobile() && viewportRef.current) {
      const width = viewportRef.current.clientWidth
      viewportRef.current.scrollTo({ left: wrapped * width, behavior: 'smooth' })
    }
  }, [count])

  const next = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    setIndex(0)
    if (viewportRef.current) {
      viewportRef.current.scrollLeft = 0
    }
  }, [category])

  useEffect(() => {
    if (paused || count <= 1) return
    const id = setInterval(() => goTo(index + 1), INTERVAL)
    return () => clearInterval(id)
  }, [paused, count, goTo, index])

  const onTouchStart = () => setPaused(true)
  const onTouchEnd = () => setPaused(false)

  const onScroll = () => {
    if (!isMobile() || !viewportRef.current) return
    const width = viewportRef.current.clientWidth
    if (!width) return
    const nextIndex = Math.round(viewportRef.current.scrollLeft / width)
    if (nextIndex !== index && nextIndex >= 0 && nextIndex < count) {
      setIndex(nextIndex)
    }
  }

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
        <div
          ref={viewportRef}
          className="carousel__viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onScroll={onScroll}
        >
          <div
            className="carousel__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((p) => (
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
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
          disabled={count <= 1}
        >
          ‹
        </button>

        <div className="carousel__dots" role="tablist" aria-label="Project slides">
          {slides.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${p.title}`}
              className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
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
