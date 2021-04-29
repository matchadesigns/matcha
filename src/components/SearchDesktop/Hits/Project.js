/* eslint-disable react/display-name */
/** @jsx jsx */
import {Link} from 'gatsby'
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Highlight} from 'react-instantsearch-dom'
import {Box, Grid, jsx, Text} from 'theme-ui'

export const Project = clickHandler => ({hit}) => {
  const {
    slug: {current: slug},
    category
  } = hit

  const productPath = `/${category.slug.current}/${slug}`
  const categoryPath = `/${category.slug.current}`
  const imageData = getGatsbyImageData(
    hit.images[0].asset,
    {maxWidth: 120},
    sanityConfig
  )
  return (
    <Grid gap={2} columns={['120px auto']} m={2}>
      <Box>
        <Link to={productPath} onClick={clickHandler}>
          <GatsbyImage image={imageData} sx={{variant: 'images.card'}} />
        </Link>
      </Box>
      <Box sx={{fontSize: 1}}>
        <Link to={productPath} onClick={clickHandler}>
          <h4>
            <Highlight attribute="title" hit={hit} tagName="mark" /> -{' '}
            <Highlight attribute="subtitle" hit={hit} tagName="mark" />
          </h4>
        </Link>
        <Text>
          <Link to={categoryPath} onClick={clickHandler}>
            <Highlight attribute="category.title" hit={hit} tagName="mark" />
          </Link>
        </Text>
      </Box>
    </Grid>
  )
}
