/** @jsx jsx */
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import {Flex, jsx} from 'theme-ui'
import Logo from '../../assets/svg/logo.svg'
import MatchaCurved from '../../assets/svg/matcha_curved.svg'
import {useSiteMetadata} from '../../lib/useSiteMetadata'
import Icon from '../icon'

export const Header = ({isTransparent, hasBranding, onHideNav, onShowNav, showNav}) => {
  const {title} = useSiteMetadata()

  return (
    <Flex
      as='header'
      sx={{
        variant: 'layout.header',
        bg: isTransparent ? 'transparent' : 'brownWhite',
        position: isTransparent ? 'fixed' : 'sticky',
        boxShadow: !isTransparent && '0 5px 8px rgba(0,0,0,.05)',
        width: 'full',
        py: !hasBranding && 4
      }}
    >
      {hasBranding && (
        <Link to='/'>
          <Flex id='logo' sx={{flexDirection: 'column', px: 3, py: 0}}>
            <h1 hidden>{title}</h1>
            <MatchaCurved sx={{width: '96px', mx: 'auto'}} />
            <Logo sx={{width: '48px', mx: 'auto', mt: '-10px'}} />
          </Flex>
        </Link>
      )}

      {showNav && (
        <button>
          <Icon symbol='hamburger' />
        </button>
      )}

      <nav>
        <Flex as='ul'>
          <MenuLink to='/boutique/' activeClassName='active'>
            <Li>Boutique</Li>
          </MenuLink>
          <MenuLink to='/prestations/' activeClassName='active'>
            <Li>Prestations</Li>
          </MenuLink>
          <MenuLink to='/realisations/' activeClassName='active'>
            <Li>Réalisations</Li>
          </MenuLink>
          <MenuLink to='/actualites/' activeClassName='active'>
            <Li>Actualités</Li>
          </MenuLink>
          <MenuLink to='/qui-sommes-nous/' activeClassName='active'>
            <Li>Qui sommes nous</Li>
          </MenuLink>
          <MenuLink to='/contact/' activeClassName='active'>
            <Li>Contact</Li>
          </MenuLink>
        </Flex>
      </nav>
    </Flex>
  )
}

const MenuLink = styled(Link)`
  padding-right: 0.5em;

  &.active {
    li:before {
      background-image: url(/svg/li_bullet_hover.svg);
    }
  }
`
const Li = styled.li`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-right: 1vw;
  &:before {
    content: '';
    height: 1em;
    width: 1em;
    background-image: url(/svg/li_bullet.svg);
    background-size: 0.75em 0.75em;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.5em;
  }
  &:hover:before {
    background-image: url(/svg/li_bullet_hover.svg);
  }
`
