export function getProductPath (slugs) {
  const {category, product} = slugs
  return `/${category.current || category}/${product.current || product}/`
}

// Products in this category are shown with a "PROMO" badge
export const PROMO_CATEGORY_SLUG = 'promotions'

export function isPromo (category) {
  return category?.slug?.current === PROMO_CATEGORY_SLUG
}
