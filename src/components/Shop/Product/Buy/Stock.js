/** @jsx jsx */
import {jsx} from 'theme-ui'
// import {motion} from 'framer-motion'

export const Stock = ({inStock}) => (
  <div
    sx={{
      pr: 3,
      fontSize: 1,
      display: 'table-cell',
      color: inStock ? 'green' : 'tomato',
    }}
  >
    {inStock ? 'En stock' : 'Produit épuisé'}
  </div>
)
