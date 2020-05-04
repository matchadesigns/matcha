/** @jsx jsx */
import {motion} from 'framer-motion'
import {Grid, jsx} from 'theme-ui'
import {ProductCard} from './ProductCard'

export const ProductList = ({nodes, ...props}) => (
  <Grid columns={[2, 3, 4, 6]} {...props}>
    {nodes &&
      nodes.map(product => (
        <motion.div key={product.id} animate={{scale: 1}} transition={{duration: 0.5}}>
          <ProductCard {...product} />
        </motion.div>
      ))}
  </Grid>
)
