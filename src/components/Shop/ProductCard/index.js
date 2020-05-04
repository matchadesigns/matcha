/** @jsx jsx */
// import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Box, Card, jsx} from 'theme-ui'
import {AddToCart} from '../AddToCart'
import {Image} from './Image'
import {Price} from './Price'
import {Stock} from './Stock'
import {Title} from './Title'
import {motion} from 'framer-motion'

export const ProductCard = ({id, title, slug, category, images, price, sku}) => {
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
  const productPath = `/${category.slug.current}/${slug.current}`
  const inStock = sku > 0
  return (
    <motion.div layout='product'>
      <Card
        sx={{
          maxWidth: 300
        }}
      >
        <div>
          <div>
            {images && images[0] && images[0].asset && <Image fluid={images[0].asset.fluid} link={productPath} />}
          </div>
          <Box p={1}>
            <Title title={title} category={category.title} link={productPath} />
            {inStock && price && <Price price={price.formatted} />}
            <Stock inStock={inStock} />
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
    </motion.div>
  )
}
