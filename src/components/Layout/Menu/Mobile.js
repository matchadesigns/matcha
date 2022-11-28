/** @jsx jsx */
import {useContext} from 'react'
import {slide as Menu} from 'react-burger-menu'
import {jsx} from 'theme-ui'
import {MenuContext} from '..'
import {Link as GatsbyLink} from 'gatsby'
import {links} from '.'

export const Mobile = () => {
  const ctx = useContext(MenuContext)
  return (
    <Menu
      right
      width="80%"
      sx={{variant: 'layout.mobileMenu'}}
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={state => ctx.stateChangeHandler(state)}
      pageWrapId="app"
    >
      {links.map(({url, text}) => (
        <Link key={url} to={url}>
          {text}
        </Link>
      ))}
    </Menu>
  )
}

const Link = props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      variant: 'links.header',
    }}
  />
)
