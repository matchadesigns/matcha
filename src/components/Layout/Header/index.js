/** @jsx jsx */
import {motion} from 'framer-motion'
import {Link} from 'gatsby'
import {useEffect, useState} from 'react'
import {Box, Flex, jsx} from 'theme-ui'
import Logo from '../../../assets/svg/logo.svg'
import {useSiteMetadata} from '../../../lib/useSiteMetadata'
import {Desktop as DesktopMenu, MobileButton as MobileMenuButton} from '../Menu'
import {Cart} from './Cart'
import {Search} from './Search'

export const Header = ({isTransparent}) => {
  const {title} = useSiteMetadata()
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setOpacity(pageYOffset * 0.002)
  }
  return (
    <Flex
      as='header'
      sx={{
        display: 'flex',
        variant: 'layout.header',
        bg: isTransparent ? `rgba(242,233,223,${opacity})` : 'brownWhite',
        position: isTransparent ? 'fixed' : 'sticky',
        top: isTransparent ? ['3em', '3em', '3em', 0] : '',
        p: 2,
        boxShadow: !isTransparent && '0 5px 8px rgba(0,0,0,.05)',
        width: '100%'
      }}
    >
      <Link to='/' sx={{display: 'flex', alignItems: 'center', opacity: isTransparent ? opacity : 1}}>
        <Flex id='logo' sx={{flexDirection: 'column', px: 3, py: 0}}>
          <h1 hidden>{title}</h1>
          <Logo sx={{height: '100px', mx: 'auto', mt: '-10px'}} />
        </Flex>
      </Link>
      <nav>
        <MobileMenuButton sx={{display: ['flex', 'flex', 'flex', 'none'], order: [1, 1, 1, 0]}} />
        <DesktopMenu sx={{display: ['none', 'none', 'none', 'flex'], order: [0, 0, 0, 1]}} />

        <Box
          sx={{
            display: ['none', 'none', 'none', 'flex'],
            flexDirection: 'column',
            alignItems: 'start',
            order: [0, 0, 0, 1],
            border: '0',
            // borderColor: 'brownWhite',
            px: 3,
            height: '3em'
          }}
        >
          <Search />
          <Cart />
        </Box>
      </nav>
    </Flex>
  )
}
