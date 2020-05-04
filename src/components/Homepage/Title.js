/** @jsx jsx */

import {jsx} from 'theme-ui'
import {Fragment} from 'react'
import Logo from '../../assets/svg/logo.svg'
import MatchaCurved from '../../assets/svg/matcha_curved.svg'

export const Title = () => (
  <Fragment>
    <MatchaCurved sx={{width: '25vmin', mt: '70px', zIndex: 1}} />
    <Logo sx={{width: '25vmin', mb: 3, zIndex: 1}} />
  </Fragment>
)
