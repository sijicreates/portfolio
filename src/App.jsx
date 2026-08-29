import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectsModal from './components/ProjectsModal'
import Tools from './components/Tools'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('web')
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    openModal()
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero onViewProjects={handleViewProjects} />
        <Projects
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onViewAll={openModal}
        />
        <Tools />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectsModal
        open={modalOpen}
        onClose={closeModal}
        category={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </>
  )
}
