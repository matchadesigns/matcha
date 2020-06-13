/** @jsx jsx */
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {Highlight} from 'react-instantsearch-dom'
import {Box, Grid, jsx, Text} from 'theme-ui'

export const Product = clickHandler => ({hit}) => {
  const {
    slug: {current: slug},
    category,
    price: {formatted: price}
  } = hit

  const productPath = `/${category.slug.current}/${slug}`
  const categoryPath = `/${category.slug.current}`
  return (
    <Grid gap={2} columns={['120px auto']} sx={{borderBottom: '1px solid', borderColor: 'gray.3', pb: 3, mb: 3}}>
      <Box>
        <Link to={productPath} onClick={clickHandler}>
          <Img fixed={hit.images[0].asset.fixed} sx={{variant: 'images.card'}} />
        </Link>
      </Box>
      <Box sx={{fontSize: 1}}>
        <Link to={productPath} onClick={clickHandler}>
          <Highlight attribute='title' hit={hit} tagName='mark' sx={{fontSize: 2}} />
        </Link>
        <Text>
          <Link to={categoryPath} onClick={clickHandler}>
            <Highlight attribute='category.title' hit={hit} tagName='mark' />
          </Link>
        </Text>
        <Text sx={{fontSize: 0}}>
          Tags: <Highlight attribute='tags' hit={hit} tagName='mark' />
        </Text>
        <Text sx={{fontSize: 2}}>{price}</Text>
      </Box>
    </Grid>
  )
}
