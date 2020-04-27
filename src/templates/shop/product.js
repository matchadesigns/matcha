/** @jsx jsx */
import {jsx, Box, Styled} from 'theme-ui'
import Layout from '../../containers/layout'
import SEO from '../../components/SEO'
import {graphql} from 'gatsby'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import {Product} from '../../components/Shop/Product'
import {Products} from '../../components/Shop/Products'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'
import {JsonLd} from 'react-schemaorg'
import {add, format} from 'date-fns'

const ProductPage = ({data, errors, ...props}) => {
  const {
    product,
    sameCategoryProducts,
    site: {siteTitle, siteUrl}
  } = data
  const {title, slug, category, images, description, price, sku, barcode, publishedAt} = product
  const sameCategoryProductsNodes = mapEdgesToNodes(sameCategoryProducts)
  const image = images && images.images && images.images[0] && images.images[0].asset.fluid.src
  const excerpt = description && toPlainText(description)
  const productPath = `/${category.slug.current}/${slug.current}`
  const inStock = sku > 0
  return (
    <Layout {...props}>
      {errors && <SEO title="GraphQL Error" />}
      {product && <SEO title={title} description={excerpt} image={image} product />}
      {product && (
        <JsonLd
          item={{
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: title,
            url: siteUrl + productPath,
            image,
            description,
            mpn: barcode && barcode.barcode,
            category: category && category.title,
            publishedAt,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              priceValidUntil: format(add(new Date(), {years: 1}), 'yyyy-MM-dd'),
              price: price.value,
              itemCondition: 'https://schema.org/NewCondition',
              availability: inStock ? 'http://schema.org/InStock' : 'https://schema.org/OutOfStock',
              url: siteUrl + productPath
            },
            brand: {
              '@type': 'Brand',
              name: siteTitle
            },
            sku
          }}
        />
      )}
      {errors && <GraphQLErrorList errors={errors} />}

      {product && <Product {...product} />}
      {sameCategoryProducts && sameCategoryProducts.length > 0 && (
        <Box mt={3}>
          <Styled.h4>Dans la catégorie {category.title})}</Styled.h4>
          <Products nodes={sameCategoryProductsNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProductPage($product: String, $category: String) {
    product: sanityProduct(id: {eq: $product}) {
      ...productFields
    }
    sameCategoryProducts: allSanityProduct(
      filter: {id: {ne: $product}, category: {id: {eq: $category}}}
      sort: {order: [DESC], fields: [publishedAt]}
      limit: 6
    ) {
      edges {
        node {
          ...productPreviewFields
        }
      }
    }
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      siteTitle: title
      siteUrl: url
    }
  }
`

export default ProductPage
