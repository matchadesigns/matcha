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
    <span sx={{color: 'white', fontWeight: 'bold'}}>Vacances !</span> Mâtcha
    prend quelques vacances, du 15 juillet au 15 août. La boutique en ligne
    reste ouverte, les commandes seront traitées à notre retour. Bel été !
  </Box>
)
