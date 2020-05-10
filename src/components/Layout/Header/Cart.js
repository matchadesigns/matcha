/** @jsx jsx */
import {IoMdBasket} from 'react-icons/io'
import {Badge, Box, jsx, Text} from 'theme-ui'
export const Cart = () => (
  <button
    className='snipcart-checkout'
    sx={{
      border: 0,
      p: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      bg: 'transparent',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      '&:hover': {
        cursor: 'pointer'
      },
      order: 1
    }}
  >
    <Box pr={2}>
      <IoMdBasket size={32} sx={{color: 'primary'}} />
      <Badge variant='circle' ml={-3} mt={-3} sx={{bg: 'primary'}}>
        <span className='snipcart-items-count' sx={{color: 'white'}} />
      </Badge>
    </Box>
    <Text>Panier</Text>
  </button>
)
