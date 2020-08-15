/** @jsx jsx */
import {jsx, Styled, Box} from 'theme-ui'
import {Layout} from '../components/Layout'
import Seo from '../components/Seo'
import {graphql, Link} from 'gatsby'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {toPlainText, mapEdgesToNodes} from '../lib/helpers'
import {BlockContent} from '../components/BlockContent'
import {ProductList} from '../components/Shop/ProductList'

const ShopPage = ({data, errors, ...props}) => {
  const {
    page: {title, _rawBody: body},
    products,
    categories
  } = data
  const productNodes = mapEdgesToNodes(products)
  const categoriesNodes = mapEdgesToNodes(categories)
  return (
    <Layout {...props}>
      {errors && <Seo title='GraphQL Error' />}
      <Seo
        title={title && title}
        description={body && toPlainText(body)}
      // image={product.image}
      />
      {errors && <GraphQLErrorList errors={errors} />}
      <Box p={4}>
        {title && <Styled.h1 sx={{p: 0, mr: 3}}>{title}</Styled.h1>}
        <Box>
          {categoriesNodes &&
            categoriesNodes.length > 0 &&
            categoriesNodes.map(category => (
              <Link
                key={category.slug.current}
                to={`/${category.slug.current}/`}
              >
                <Styled.h3 sx={{display: 'inline-block', p: 0, mr: 4}}>
                  {category.title}
                </Styled.h3>
              </Link>
            ))}
        </Box>
        {body && <BlockContent blocks={body} />}

        {productNodes && productNodes.length > 0 && (
          <ProductList nodes={productNodes} sx={{mt: 3}} />
        )}
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ShopQuery {
    page: sanityPage(id: {eq: "-dac4f700-3a5a-551c-9cd2-d366d84fa14b"}) {
      title
      _rawBody
    }
    products: allSanityProduct(
      sort: {order: [DESC, ASC, DESC], fields: [sku, title, publishedAt]}
    ) {
      edges {
        node {
          ...productPreviewFields
        }
      }
    }
    categories: allSanityProductCategory(
      sort: {order: [ASC], fields: [order]}
    ) {
      edges {
        node {
          ...productCategoryFields
        }
      }
    }
  }
`

export default ShopPage
