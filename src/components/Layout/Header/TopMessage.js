/** @jsx jsx */

import {jsx, Box} from 'theme-ui'

export const TopMessage = () => (
  <Box
    sx={{
      width: 'full',
      zIndex: 10,
      textAlign: 'center',
      bg: 'primary',
      color: 'white',
      fontSize: [0, 1, 1],
      p: [1],
      mb: 1
    }}
  >
    Jusqu'au 31 décembre 2020, profitez de la <span sx={{color: 'white', fontWeight: 'bold'}}>livraison offerte</span> avec le code CONFI2
  </Box>
)
