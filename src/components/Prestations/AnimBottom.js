/** @jsx jsx */
import {jsx} from 'theme-ui'
import Forme from '../../assets/svg/PrestationsAnimBottom.svg'

export const AnimBottom = ({position = 'absolute', height, bottom, left}) => (
  <div sx={{bottom, left, position}}>
    <Forme sx={{height, position}} />
  </div>
)
