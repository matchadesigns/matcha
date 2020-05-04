/** @jsx jsx */
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
// import {mapEdgesToNodes} from '../../lib/helpers'
// import {format, parseISO} from 'date-fns'
import {uniqBy} from 'lodash'
import {Box, Grid, jsx} from 'theme-ui'
import {BlockContent} from '../../BlockContent'
import {Aside} from './Aside'
import {Image} from './Image'
import {Tags} from './Tags'
import {Title} from './Title'
import {Variants} from './Variants'
import {getProductPath} from '../helpers'
import {motion} from 'framer-motion'

export const Product = ({sameVariantGroupsProductsNodes, ...product}) => {
  graphql`
    fragment productFields on SanityProduct {
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
          ...productImageFields
        }
      }
      description: _rawDescription
      price {
        value
        formatted
      }
      weight
      sku
      barcode {
        barcode
      }
      variants {
        variantGroup {
          id
          reference: ref
          option
        }
        value
      }
      publishedAt
      tags
    }
  `
  const {
    id,
    title,
    slug,
    category,
    images,
    description,
    price,
    // weight,
    sku,
    // barcode,
    variants,
    // publishedAt,
    tags
  } = product
  const inStock = sku > 0

  const thumbs = [...images]
  const image = thumbs.shift()

  const productPath = getProductPath({category: category.slug, product: slug})
  const refactoredVariants = variants.map(variant => {
    const {
      value,
      variantGroup: {id: variantGroupId, option}
    } = variant
    const refactoredVariantItems = []
    sameVariantGroupsProductsNodes.forEach(product => {
      product.variants.forEach(
        variant =>
          variant.variantGroup.id === variantGroupId &&
          refactoredVariantItems.push({
            title: variant.value,
            path: `/${product.category.slug.current}/${product.slug.current}`,
            isActive: variant.value === value
          })
      )
    })
    return {option, items: uniqBy(refactoredVariantItems, 'title')}
  })
  return (
    <Grid gap={2} columns={[1, 2, '4fr 6fr 4fr', '4fr 6fr 3fr']} className='boundary-element'>
      <Box sx={{order: 0}}>
        {image && <Image image={image} />}
        {thumbs && (
          <Grid gap={3} width={[64]} sx={{mt: 4}}>
            {thumbs.map(i => (
              <Img key={i.asset.fluid.src} fluid={i.asset.fluid} data-attribute='SRL' />
            ))}
          </Grid>
        )}
      </Box>
      <Box
        sx={{
          p: 2,
          mb: 2,
          order: [1, 2, 1],
          gridColumnStart: ['auto', 1, 'auto'],
          gridColumnEnd: ['auto', 4, 'auto']
        }}
      >
        <Title title={title} category={{title: category.title, link: `/${category.slug.current}`}} />

        {description && <BlockContent blocks={description} />}
        <Variants variants={refactoredVariants} />
        {tags && <Tags tags={tags} />}
      </Box>
      <Box sx={{order: [2, 1, 2], mb: [4, 0]}}>
        <Aside
          id={id}
          title={title}
          path={productPath}
          price={price}
          category={category.title}
          cartImage={images[0].asset.fluid.src}
          inStock={inStock}
        />
      </Box>
    </Grid>
  )
}
