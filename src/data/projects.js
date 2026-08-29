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
    title: 'Personal Portfolio Site',
    category: 'web',
    description: 'A responsive single-page portfolio built with React and modern CSS.',
    tags: ['React', 'Vite', 'CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Landing Page',
    category: 'web',
    description: 'Clean landing page with product showcase and smooth scroll animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    id: 3,
    title: 'Team Jersey — Home Kit',
    category: 'jersey',
    description: 'Custom home jersey design with bold typography and team branding.',
    tags: ['Illustrator', 'Photoshop'],
    link: '#',
  },
  {
    id: 4,
    title: 'Away Jersey Concept',
    category: 'jersey',
    description: 'Minimal away kit with gradient accents and clean number placement.',
    tags: ['Illustrator'],
    link: '#',
  },
  {
    id: 5,
    title: 'Brand Logo — Tech Startup',
    category: 'logo',
    description: 'Modern wordmark and icon set for a technology startup brand.',
    tags: ['Illustrator', 'Figma'],
    link: '#',
  },
  {
    id: 6,
    title: 'Coffee Shop Logo',
    category: 'logo',
    description: 'Warm, approachable logo with custom lettering and icon mark.',
    tags: ['Illustrator'],
    link: '#',
  },
  {
    id: 7,
    title: 'YouTube Thumbnail — Tutorial',
    category: 'thumbnail',
    description: 'High-contrast thumbnail designed for click-through and readability.',
    tags: ['Photoshop', 'Canva'],
    link: '#',
  },
  {
    id: 8,
    title: 'Gaming Stream Thumbnail',
    category: 'thumbnail',
    description: 'Dynamic layout with bold text and vibrant color blocking.',
    tags: ['Photoshop'],
    link: '#',
  },
  {
    id: 9,
    title: 'Streetwear Hoodie Design',
    category: 'clothing',
    description: 'Graphic print placement for a limited-edition hoodie collection.',
    tags: ['Illustrator', 'Photoshop'],
    link: '#',
  },
  {
    id: 10,
    title: 'T-Shirt Collection',
    category: 'clothing',
    description: 'Series of minimalist tee designs with typographic focus.',
    tags: ['Illustrator'],
    link: '#',
  },
  {
    id: 11,
    title: 'Event Poster',
    category: 'other',
    description: 'Promotional poster for a local music event with layered visuals.',
    tags: ['Photoshop', 'InDesign'],
    link: '#',
  },
  {
    id: 12,
    title: 'Social Media Banner Set',
    category: 'other',
    description: 'Cohesive banner designs for Instagram, Twitter, and LinkedIn.',
    tags: ['Figma', 'Canva'],
    link: '#',
  },
]

export function getCategoryLabel(id) {
  return categories.find((c) => c.id === id)?.label ?? id
}

export function getCategoryAspect(id) {
  return categories.find((c) => c.id === id)?.aspect ?? 'landscape'
}
