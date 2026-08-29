export function projectImageUrl(path) {
  if (!path) return null
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\//, '')}`
}
