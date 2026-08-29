import { useState, useEffect } from 'react'

const TILE_SIZE = 52

export default function HeroGrid() {
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    const update = () => {
      const cols = Math.ceil(window.innerWidth / TILE_SIZE) + 1
      const rows = Math.ceil(window.innerHeight / TILE_SIZE) + 1
      setTiles(Array.from({ length: cols * rows }, (_, i) => i))
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      className="hero__grid"
      style={{ gridTemplateColumns: `repeat(auto-fill, ${TILE_SIZE}px)` }}
      aria-hidden="true"
    >
      {tiles.map((i) => (
        <div key={i} className="hero__tile" />
      ))}
    </div>
  )
}
