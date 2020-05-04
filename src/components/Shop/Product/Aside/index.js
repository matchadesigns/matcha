/** @jsx jsx */
import {jsx, Grid, Text, Box, Divider} from 'theme-ui'
import {Stock} from './Stock'
import {Social} from './Social'
import {AddToCart} from '../../AddToCart'
import {Shipping} from './Shipping'

export const Aside = ({id, title, path, price, category, cartImage, inStock}) => (
  <Box sx={{variant: 'boxes.important'}}>
    <Grid gap={2} columns={['1fr 2fr', 1]} sx={{alignItems: 'center', justifyContent: 'center'}}>
      <Box>
        {inStock && <div sx={{mb: 1, fontSize: 3}}>{price.formatted}</div>}
        <Stock inStock={inStock} />
      </Box>
      {inStock && (
        <AddToCart
          id={id}
          title={title}
          price={price.value}
          url={path}
          description={category}
          image={cartImage}
        />
      )}
    </Grid>
    <Shipping />
    <Divider sx={{my: 3}} />
    <Social path={path} />
  </Box>
)
