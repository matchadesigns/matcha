/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import Layout from '../../containers/layout'
import SEO from '../../components/SEO'
import {graphql} from 'gatsby'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import {toPlainText, mapEdgesToNodes} from '../../lib/helpers'
import BlockContent from '../../components/block-content'
import {Products} from '../../components/Shop/Products'

const CategoryPage = ({data, errors, ...props}) => {
  const {products, category} = data
  const productNodes = mapEdgesToNodes(products)
  return (
    <Layout {...props}>
      {errors && <SEO title='GraphQL Error' />}
      {category && (
        <SEO
          title={category.title}
          description={category.description && toPlainText(category.description)}
          // image={product.image}
        />
      )}
      {errors && <GraphQLErrorList errors={errors} />}

      {category && <Styled.h1>{category.title}</Styled.h1>}
      {category && category.description && <BlockContent blocks={category.description} />}

      {productNodes && productNodes.length > 0 && <Products nodes={productNodes} sx={{mt: 3}} />}
    </Layout>
  )
}

export const query = graphql`
  fragment categoryFields on SanityCategory {
    id
    title
  }
  query Category($category: String) {
    category: sanityCategory(id: {eq: $category}) {
      ...categoryFields
    }
    products: allSanityProduct(
      filter: {category: {id: {eq: $category}}}
      sort: {order: [DESC], fields: [publishedAt]}
    ) {
      edges {
        node {
          ...productPreviewFields
        }
      }
    }
  }
`

export default CategoryPage
