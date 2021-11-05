/** @jsx jsx */
import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {uniqBy} from 'lodash'
import {Grid, jsx} from 'theme-ui'
import {BlockContent} from '../../BlockContent'
import {getProductPath} from '../helpers'
import {Buy} from './Buy'
import {Images} from './Images'
import {Tags} from './Tags'
import {Title} from './Title'
import {Variants} from './Variants'
import {Social} from './Social'

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
      deliveryTime
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
    deliveryTime,
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

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1}
  }

  const isThumb = thumbs.length > 0
  const columns = []
  columns.push(1) // phones
  columns.push(1) // tablets
  columns.push(isThumb ? 2 : 2) // desktop
  columns.push(isThumb ? 2 : 2) // wide
  columns.push(isThumb ? 2 : 2) // extrawide
  console.log(columns)
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Grid gap={2} columns={columns} sx={{p: 4}}>
        <Images item={item} image={image} thumbs={thumbs} />
        <motion.div
          variants={item}
          sx={{
            pl: [0, 0, 4],
            mb: 2,
            gridColumnStart: ['auto', 1, 'auto'],
            gridColumnEnd: ['auto', 4, 'auto'],
            order: 2
          }}
        >
          <Title
            title={title}
            category={{
              title: category.title,
              link: `/${category.slug.current}`
            }}
          />
          <Buy
            id={id}
            title={title}
            path={productPath}
            price={price}
            deliveryTime={deliveryTime}
            category={category.title}
            cartImage={images[0].asset.url}
            inStock={inStock}
          />
          <Variants variants={refactoredVariants} />
          {description && <BlockContent blocks={description} />}
          {tags && <Tags tags={tags} />}
          <Social path={productPath} />
        </motion.div>
      </Grid>
    </motion.div>
  )
}
