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
    Nous sommes en vacances du <span sx={{color: 'white', fontWeight: 'bold'}}>22 au 31 décembre</span>. Les commandes passées pendant cette période seront traitées dès notre retour. Passez de belles fêtes !
  </Box>
)
