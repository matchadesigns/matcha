/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {AddToCart} from '../../AddToCart'
import {Shipping} from './Shipping'
import {Stock} from './Stock'

export const Buy = ({id, title, path, price, category, cartImage, inStock}) => (
  <Box>
    {inStock && <div sx={{mb: 1, fontSize: 3}}>{price.formatted}</div>}
    <div sx={{display: 'table'}}>
      <Stock inStock={inStock} />
      {inStock && (
        <AddToCart id={id} title={title} price={price.value} url={path} description={category} image={cartImage} />
      )}
    </div>
    <Shipping />
  </Box>
)
