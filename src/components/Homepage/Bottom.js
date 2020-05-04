/** @jsx jsx */
import {IoIosMail} from 'react-icons/io'
import {Flex, jsx, Text} from 'theme-ui'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'

export const Bottom = ({height}) => (
  <footer
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', 'repeat(auto-fit, minmax(128px, 1fr))'],
      height,
      mx: '2vw',
      alignItems: 'center',
      px: [1, 2],
      zIndex: 1
    }}
  >
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: ['center', 'center', 'flex-start'],
        zIndex: 'inherit'
      }}
    >
      <IoIosMail size={32} sx={{color: 'gray'}} />
      contact.studiomatcha@gmail.com
    </Flex>
    <Flex sx={{justifyContent: ['center'], zIndex: 'inherit'}}>
      <a href='https://matchadesigns.com'>matchadesigns.com</a>
    </Flex>
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: ['center', 'center', 'flex-end'],
        zIndex: 'inherit'
      }}
    >
      <Text sx={{pr: 3, display: ['none', 'none', 'flex']}}>Suivez notre actualitésur les réseaux sociaux :</Text>
      <Facebook sx={{width: '32px', mr: 1}} />
      <Instagram sx={{width: '32px'}} />
    </Flex>
  </footer>
)
