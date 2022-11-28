/** @jsx jsx */
import {jsx} from 'theme-ui'
import SearchComponent from '../../SearchDesktop'

const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  {name: 'Products', title: 'Produits', hitComp: 'ProductHit'},
  {name: 'Projects', title: 'Réalisations', hitComp: 'ProjectHit'},
]

export const SearchDesktop = () => (
  <SearchComponent collapse indices={searchIndices} />
)
