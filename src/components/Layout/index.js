/** @jsx jsx */
import {motion} from 'framer-motion'
import React, {useState} from 'react'
import {jsx} from 'theme-ui'
import '../../assets/styles/layout.css'
import {Footer} from './Footer'
import {Header} from './Header'
import {Mobile as MobileMenu} from './Menu'
import {Cart} from './Header/Cart'
import {Search} from './Header/Search'
import SimpleReactLightbox from 'simple-react-lightbox'

export const MenuContext = React.createContext(false)

export const Layout = ({children, transparentHeader = false, noBranding = false, ...props}) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        handleToggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen)
      }}
    >
      <SimpleReactLightbox>
        <MobileMenu />
        <div sx={{display: ['flex', 'flex', 'flex', 'none'], bg: 'red', p: 1, zIndex: 20}}>
          <Cart sx={{order: 0, pr: 3}} />
          <Search />
        </div>
        <motion.div
          id='app'
          sx={{
            bg: 'brownWhite',
            minHeight: 'full',
            display: 'grid',
            gridTemplateRows: 'auto auto auto',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'wrap'
          }}
        >
          <Header isTransparent={transparentHeader} />

          <motion.main
            sx={{variant: 'layout.content', bg: transparentHeader ? 'brownWhite' : 'white'}}
            layoutId='layout'
          >
            {/* exit={{opacity: 0}}
      initial='initial'
  animate */}
            {children}
          </motion.main>
          <Footer />
        </motion.div>
      </SimpleReactLightbox>
    </MenuContext.Provider>
  )
}
