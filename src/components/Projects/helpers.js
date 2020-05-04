export function getProjectPath (slugs) {
  const {project} = slugs
  const category = getCategoryPath(slugs)
  return category + `${project.current || project}/`
}

export function getCategoryPath (slug) {
  const {category} = slug
  return `/${category.current || category}/`
}
