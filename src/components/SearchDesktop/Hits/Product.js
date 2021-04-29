/* eslint-disable react/display-name */
/** @jsx jsx */
import {Link} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Highlight} from 'react-instantsearch-dom'
import {Box, Grid, jsx} from 'theme-ui'
import {sanityConfig} from '../../../../sanity-config'

export const Product = clickHandler => ({hit}) => {
  const {
    slug: {current: slug},
    category,
    price: {formatted: price}
  } = hit

  const productPath = `/${category.slug.current}/${slug}`
  const categoryPath = `/${category.slug.current}`
  const imageData = getGatsbyImageData(
    hit.images[0].asset,
    {maxWidth: 120},
    sanityConfig
  )
  return (
    <Grid
      gap={2}
      columns={['120px auto']}
      sx={{borderBottom: '1px solid', borderColor: 'gray.3', pb: 3, mb: 3}}
    >
      <Box>
        <Link to={productPath} onClick={clickHandler}>
          <GatsbyImage image={imageData} sx={{variant: 'images.card'}} />
        </Link>
      </Box>
      <Box sx={{fontSize: 1}}>
        <Link to={productPath} onClick={clickHandler}>
          <Highlight
            attribute="title"
            hit={hit}
            tagName="mark"
            sx={{fontSize: 2}}
          />
        </Link>
        <Box>
          <Link to={categoryPath} onClick={clickHandler}>
            <Highlight attribute="category.title" hit={hit} tagName="mark" />
          </Link>
        </Box>
        <Box sx={{fontSize: 0}}>
          <Highlight attribute="tags" hit={hit} tagName="mark" />
        </Box>
        <Box sx={{fontSize: 2}}>{price}</Box>
      </Box>
    </Grid>
  )
}
