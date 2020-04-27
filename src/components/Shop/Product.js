/** @jsx jsx */
import {jsx, Grid, Flex, Styled, Text, Box, Divider} from 'theme-ui'
import BlockContent from '../block-content'
import Img from 'gatsby-image'
import {graphql, useStaticQuery, Link} from 'gatsby'
import {AddToCart} from './AddToCart'
import {FaFacebookSquare, FaTwitterSquare, FaPinterestSquare} from 'react-icons/fa'
import {format, parseISO} from 'date-fns'

export const Product = product => {
  const {
    site: {siteUrl}
  } = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        siteUrl: url
      }
    }
  `)
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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid_noBase64
          }
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
    weight,
    sku,
    barcode,
    variants,
    publishedAt,
    tags
  } = product
  const inStock = sku > 0

  const thumbs = images.map(i => i.asset.fluid)
  const image = thumbs.shift()

  const productPath = `/${category.slug.current}/${slug.current}`

  return (
    <article>
      <Grid gap={2} columns={[1, 2, '4fr 6fr 4fr', '4fr 6fr 3fr']} className='boundary-element'>
        <Box sx={{order: 0}}>
          {image && (
            <Img
              fluid={image}
              sx={{
                boxShadow: '0px 10px 10px rgba(0, 0, 0, .225)'
              }}
            />
          )}
          {thumbs && (
            <Grid gap={3} width={[64]}>
              {thumbs.map(i => (
                <Img key={i.src} fluid={i} data-attribute='SRL' />
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
          <Styled.h1>{title}</Styled.h1>
          <Box sx={{lineHeight: 2}}>
            Catégorie :{' '}
            <h2 sx={{display: 'inline-block', fontSize: 1, m: 0}}>
              <Link sx={{p: 1, bg: 'light', borderRadius: 8}} to={`/${category.slug.current}`}>
                {category.title}
              </Link>
            </h2>{' '}
          </Box>
          {description && <BlockContent blocks={description} />}
          <Box mt={2}>
            {publishedAt && <p>Publié le {format(parseISO(publishedAt), 'dd/MM/yyy')}</p>}
          </Box>
        </Box>
        <Box sx={{order: [2, 1, 2], mb: [4, 0]}}>
          <Box sx={{variant: 'boxes.important'}}>
            <Grid
              gap={2}
              columns={['1fr 2fr', 1]}
              sx={{alignItems: 'center', justifyContent: 'center'}}
            >
              <Box>
                {inStock && <div sx={{mb: 1, fontSize: 3}}>{price.formatted}</div>}
                <div sx={{mb: [0, 3], fontSize: 1, color: inStock ? 'secondary' : 'tomato'}}>
                  {inStock ? 'En stock' : 'Produit épuisé'}
                </div>
              </Box>
              {inStock && (
                <AddToCart
                  id={id}
                  title={title}
                  price={price.value}
                  url={productPath}
                  description={category.title}
                  image={images && images[0].asset.fluid.src}
                />
              )}
            </Grid>
            <Text sx={{fontSize: 1, mt: 2}}>
              <span sx={{color: 'tomato'}}>Livraison offerte</span> à partir de 10€, en 3 jours chez
              vous
            </Text>
            <Divider sx={{my: 3}} />
            <Flex sx={{alignItems: 'center', color: 'textMuted'}}>
              Partager :{' '}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${productPath}`}
                target='_blank'
                rel='noopener noreferrer'
                sx={{display: 'flex'}}
              >
                <FaFacebookSquare size={24} sx={{ml: 1, color: 'light'}} />
              </a>{' '}
              <a
                href={`https://twitter.com/intent/tweet?text=${siteUrl}${productPath}`}
                target='_blank'
                rel='noopener noreferrer'
                sx={{display: 'flex'}}
              >
                <FaTwitterSquare size={24} sx={{ml: 1, color: 'light'}} />
              </a>{' '}
              <a
                href={`https://pinterest.com/pin/create/button/?url=${siteUrl}${productPath}&media=&description=`}
                target='_blank'
                rel='noopener noreferrer'
                sx={{display: 'flex'}}
              >
                <FaPinterestSquare size={24} sx={{ml: 1, color: 'light'}} />
              </a>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </article>
  )
}
