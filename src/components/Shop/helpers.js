export function getProductPath (slugs) {
  const {category, product} = slugs
  return `/${category.current || category}/${product.current || product}/`
}
