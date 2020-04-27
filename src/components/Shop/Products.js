/** @jsx jsx */

import {jsx, Grid} from 'theme-ui'
import {ProductPreview} from './ProductPreview'

export const Products = ({nodes, ...props}) => (
  <Grid columns={[2, 3, 4, 6]} {...props}>
    {nodes && nodes.map(product => <ProductPreview key={product.id} {...product} />)}
  </Grid>
)
