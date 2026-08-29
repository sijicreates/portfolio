import { tools } from '../data/tools'

const grouped = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = []
  acc[tool.category].push(tool.name)
  return acc
}, {})

export default function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
        My skills and expertise across development, design, and education.
        </p>
      </div>

      <div className="tools__grid">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="tools__group">
            <h3 className="tools__category">{category}</h3>
            <ul className="tools__list">
              {items.map((name) => (
                <li key={name} className="tools__item">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
