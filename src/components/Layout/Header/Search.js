/** @jsx jsx */
import {jsx} from 'theme-ui'
import SearchComponent from '../../Search'

const searchIndices = [
  {name: 'Products', title: 'Produits', hitComp: 'ProductHit'},
  {name: 'Projects', title: 'Réalisations', hitComp: 'ProjectHit'}
]

export const Search = () => <SearchComponent indices={searchIndices} />
