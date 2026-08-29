export const categories = [
  { id: 'web', label: 'Web Development', aspect: 'landscape' },
  { id: 'thumbnail', label: 'Thumbnail Design', aspect: 'landscape' },
  { id: 'jersey', label: 'Jersey Design', aspect: 'square' },
  { id: 'logo', label: 'Logo Design', aspect: 'square' },
  { id: 'clothing', label: 'Clothing Designs', aspect: 'square' },
  { id: 'other', label: 'Other Designs', aspect: 'landscape' },
]

export const projects = [
  {
    id: 1,
    title: 'Online Tabulation System',
    category: 'web',
    description: 'Online tabulation system for events',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System4.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'VeraCruz Dental Clinic',
    category: 'web',
    description: 'Online Booking Website for VeraCruz Dental Clinic',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System1.3.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Realin Medical Clinic',
    category: 'web',
    description: 'Clinic Management System for Realin Medical Clinic',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System2.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Student Evaluation and Grading System',
    category: 'web',
    description: 'CCS Student Evaluation and Grading System',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System3.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'BioSync: Web-Based Biometric System',
    category: 'web',
    description: 'A web-based biometric system for attendance and access control',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System7.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Espinoza Inventory Management System',
    category: 'web',
    description: 'A web-based inventory management system for Espinoza Grocery Store',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System5.jpg',
    link: '#',
  },
  {
    id: 7,
    title: 'RJPD Inventory Management System',
    category: 'web',
    description: 'A web-based inventory management system for RJPD Frozen Stocks ',
    tags: ['Php', 'Javascript', 'Tailwind CSS', 'MySQL'],
    image: 'images/projects/web/System6.jpg',
    link: '#',
  },
 
]

export function getCategoryLabel(id) {
  return categories.find((c) => c.id === id)?.label ?? id
}

export function getCategoryAspect(id) {
  return categories.find((c) => c.id === id)?.aspect ?? 'landscape'
}
