/** @jsx jsx */
import {jsx, Card, Text, Box} from 'theme-ui'
import Img from 'gatsby-image'
import {graphql, Link} from 'gatsby'
import {AddToCart} from './AddToCart'

export const ProductPreview = product => {
  graphql`
    fragment productPreviewFields on SanityProduct {
      id
      title
      slug {
        current
      }
      category {
        title
        slug {
          current
        }
      }
      images {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
      price {
        value
        formatted
      }
      sku
    }
  `
  const {id, title, slug, category, images, price, sku} = product
  const productPath = `/${category.slug.current}/${slug.current}`
  const inStock = sku > 0
  return (
    <Card
      sx={{
        maxWidth: 300
      }}
    >
      <div>
        <div>
          {images && images[0] && images[0].asset && (
            <Link to={productPath}>
              <Img fluid={images[0].asset.fluid} sx={{variant: 'images.card'}} />
            </Link>
          )}
        </div>
        <Box p={1}>
          <Link to={productPath} sx={{variant: 'links.product'}}>
            {title}
          </Link>
          <Text sx={{color: 'textMuted'}}>{category.title}</Text>

          {inStock && price && price.formatted && <Text>{price.formatted}</Text>}

          {inStock && (
            <Text sx={{color: 'secondary', display: 'inline-block', mr: 2}}>En stock</Text>
          )}
          {inStock && (
            <AddToCart
              id={id}
              title={title}
              price={price.value}
              url={productPath}
              description={category.title}
              image={images && images[0].asset.fluid.src}
              discrete='true'
            />
          )}
        </Box>
      </div>
    </Card>
  )
}
