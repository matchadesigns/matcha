/** @jsx jsx */
import {jsx, Box, Styled} from 'theme-ui'
import {Layout} from '../../components/Layout'
import SEO from '../../components/SEO'
import {graphql} from 'gatsby'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import {Product} from '../../components/Shop/Product'
import {ProductList} from '../../components/Shop/ProductList'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'
import {getProductPath} from '../../components/Shop/helpers'
import {ProductRichSnippet} from '../../components/Shop/ProductRichSnippet'

const ProductPage = ({data, errors, ...props}) => {
  const {product, sameVariantGroupsProducts, sameCategoryProducts} = data
  const {title, slug, category, images, description, price, sku, barcode, publishedAt} = product
  const sameCategoryProductsNodes = mapEdgesToNodes(sameCategoryProducts)
  const sameVariantGroupsProductsNodes = mapEdgesToNodes(sameVariantGroupsProducts)
  const image = images && images[0] && images[0].asset.fluid.src
  const excerpt = description && toPlainText(description)
  const productPath = getProductPath({category: category.slug.current, product: slug.current})
  return (
    <Layout {...props}>
      {errors && <SEO title='GraphQL Error' />}
      {product && <SEO title={title} description={excerpt} image={image} product />}
      {product && (
        <ProductRichSnippet
          title={title}
          path={productPath}
          image={image}
          description={excerpt}
          barcode={barcode && barcode.barcode}
          category={category && category.title}
          publishedAt={publishedAt}
          price={price.value}
          sku={sku}
        />
      )}
      {errors && <GraphQLErrorList errors={errors} />}

      {product && <Product {...product} sameVariantGroupsProductsNodes={sameVariantGroupsProductsNodes} />}
      {sameCategoryProductsNodes && sameCategoryProductsNodes.length > 0 && (
        <Box mt={3} p={5} sx={{bg: '#f9f9f9'}}>
          <Styled.h2>Dans la même catégorie</Styled.h2>
          <ProductList nodes={sameCategoryProductsNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProductPage($product: String, $variantGroupsIds: [String], $category: String) {
    product: sanityProduct(id: {eq: $product}) {
      ...productFields
      variants {
        variantGroup {
          id
          option
        }
      }
    }
    sameVariantGroupsProducts: allSanityProduct(
      filter: {variants: {elemMatch: {variantGroup: {id: {in: $variantGroupsIds}}}}}
      sort: {order: [ASC], fields: [title]}
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          category {
            slug {
              current
            }
          }
          variants {
            variantGroup {
              id
            }
            value
          }
        }
      }
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
  }
`

export default ProductPage
