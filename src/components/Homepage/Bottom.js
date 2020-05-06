/** @jsx jsx */
import {IoIosMail} from 'react-icons/io'
import {Flex, jsx, Text} from 'theme-ui'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Bottom = ({height}) => {
  const {facebook, instagram} = useSiteMetadata()
  return (
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
        <IoIosMail size={32} sx={{color: '#464448'}} />
        contact@matchadesigns.com
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
        <Text sx={{pr: 2, display: ['none', 'none', 'flex']}}>Suivez-nous sur les réseaux sociaux :</Text>
        <a
          href={`https://facebook.com/${facebook}`}
          sx={{display: 'flex', pr: 1}}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Facebook sx={{width: '32px', mr: 1}} />
        </a>
        <a href={`https://instagram.com/${instagram}`} sx={{display: 'flex'}} target='_blank' rel='noopener noreferrer'>
          <Instagram sx={{width: '32px'}} />
        </a>
      </Flex>
    </footer>
  )
}
