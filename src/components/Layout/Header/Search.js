/** @jsx jsx */
import {jsx} from 'theme-ui'
import SearchComponent from '../../Search'

const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  {name: 'Products', title: 'Produits', hitComp: 'ProductHit'},
  {name: 'Projects', title: 'Réalisations', hitComp: 'ProjectHit'}
]

export const Search = () => <SearchComponent collapse indices={searchIndices} />
