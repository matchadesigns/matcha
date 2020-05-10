/** @jsx jsx */
import {motion} from 'framer-motion'
import {Link} from 'gatsby'
import {useEffect, useState} from 'react'
import {Flex, jsx} from 'theme-ui'
import Logo from '../../../assets/svg/logo.svg'
import {useSiteMetadata} from '../../../lib/useSiteMetadata'
import {Desktop as DesktopMenu, MobileButton as MobileMenuButton} from '../Menu'
import {Cart} from './Cart'

export const Header = ({isTransparent}) => {
  const {title} = useSiteMetadata()
  const [opacity, setOpacity] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    setOpacity(pageYOffset * 0.002)
  }
  console.log(opacity)
  return (
    <motion.div>
      <Flex
        as='header'
        sx={{
          display: 'flex',
          variant: 'layout.header',
          bg: isTransparent ? `rgba(242,233,223,${opacity})` : 'brownWhite',
          position: isTransparent ? 'fixed' : 'sticky',
          boxShadow: !isTransparent && '0 5px 8px rgba(0,0,0,.05)',
          width: '100vw'
        }}
      >
        <Link to='/' sx={{display: 'flex', alignItems: 'center', opacity: isTransparent ? opacity : 1}}>
          <Flex id='logo' sx={{flexDirection: 'column', px: 3, py: 0}}>
            <h1 hidden>{title}</h1>
            <Logo sx={{height: '100px', mx: 'auto', mt: '-10px'}} />
          </Flex>
        </Link>
        <nav>
          <MobileMenuButton sx={{display: ['flex', 'flex', 'flex', 'none']}} />
          <DesktopMenu sx={{display: ['none', 'none', 'none', 'flex']}} />
          <Cart />
        </nav>
      </Flex>
    </motion.div>
  )
}
