/** @jsx jsx */
import {jsx} from 'theme-ui'
import Forme from '../../assets/svg/PrestationsAnimTop.svg'

export const AnimTop = ({position = 'absolute', height, top, right}) => (
  <div sx={{top, right, position}}>
    <Forme sx={{height, position}} />
  </div>
)
