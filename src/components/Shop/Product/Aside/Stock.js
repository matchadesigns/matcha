/** @jsx jsx */
import {jsx} from 'theme-ui'
// import {motion} from 'framer-motion'

export const Stock = ({inStock}) => (
  <div sx={{mb: [0, 3], fontSize: 1, color: inStock ? 'secondary' : 'tomato'}}>
    {inStock ? 'En stock' : 'Produit épuisé'}
  </div>
)
