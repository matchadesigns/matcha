/** @jsx jsx */
// import {motion} from 'framer-motion'
import {Grid, jsx} from 'theme-ui'
import {ProductCard} from './ProductCard'

/*
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: {opacity: 0},
  show: {opacity: 1}
}

export const ProductList = ({nodes, ...props}) => (
  <motion.div variants={container} initial='hidden' animate='show'>
    <Grid columns={[2, 3, 4, 4, 4, 6]} {...props}>
      {nodes &&
        nodes.map(product => (
          <motion.div variants={item} key={product.id}>
            <ProductCard {...product} />
          </motion.div>
        ))}
    </Grid>
  </motion.div>
)

*/

export const ProductList = ({nodes, ...props}) => (
  <Grid columns={[2, 3, 4, 4, 4, 6]} {...props}>
    {nodes &&
      nodes.map(product => <ProductCard {...product} key={product.id} />)}
  </Grid>
)
