/** @jsx jsx */
import {Link} from 'gatsby'
import {Flex, jsx} from 'theme-ui'
import Logo from '../../assets/svg/logo.svg'
// import MatchaCurved from '../../assets/svg/matcha_curved.svg'
import {useSiteMetadata} from '../../lib/useSiteMetadata'
import {Desktop as DesktopMenu, MobileButton as MobileMenuButton} from './Menu/'

export const Header = ({isTransparent, hasBranding}) => {
  const {title} = useSiteMetadata()

  return (
    <Flex
      as='header'
      sx={{
        variant: 'layout.header',
        bg: isTransparent ? 'transparent' : 'brownWhite',
        position: isTransparent ? 'fixed' : 'sticky',
        boxShadow: !isTransparent && '0 5px 8px rgba(0,0,0,.05)',
        width: '100vw',
        py: !hasBranding && 4
      }}
    >
      {hasBranding && (
        <Link to='/' sx={{display: 'flex', alignItems: 'center'}}>
          <Flex id='logo' sx={{flexDirection: 'column', px: 3, py: 0}}>
            <h1 hidden>{title}</h1>
            {/* <MatchaCurved sx={{width: '96px', mx: 'auto'}} /> */}
            <Logo sx={{height: '100px', mx: 'auto', mt: '-10px'}} />
          </Flex>
        </Link>
      )}

      <nav>
        <MobileMenuButton sx={{display: ['flex', 'flex', 'none']}} />
        <DesktopMenu sx={{display: ['none', 'none', 'flex']}} />
      </nav>
    </Flex>
  )
}
