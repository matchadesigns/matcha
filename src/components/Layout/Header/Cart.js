/** @jsx jsx */
import {IoMdBasket} from 'react-icons/io'
import {Badge, Box, jsx, Text} from 'theme-ui'
export const Cart = props => (
  <button
    className="snipcart-checkout"
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
        cursor: 'pointer',
      },
    }}
    {...props}
  >
    <Box pr={2}>
      <IoMdBasket
        size={32}
        sx={{color: ['white', 'white', 'white', 'primary']}}
      />
      <Badge
        variant="circle"
        ml={-3}
        mt={-3}
        sx={{bg: ['white', 'white', 'white', 'primary']}}
      >
        <span
          className="snipcart-items-count"
          sx={{color: ['primary', 'primary', 'primary', 'white']}}
        />
      </Badge>
    </Box>
    <Text sx={{color: ['white', 'white', 'white', 'black']}}>Panier</Text>
  </button>
)
