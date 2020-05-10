/** @jsx jsx */
import {motion} from 'framer-motion'
import React, {useState} from 'react'
import {jsx} from 'theme-ui'
import '../../assets/styles/layout.css'
import {Footer} from './Footer'
import {Header} from './Header'
import {Mobile as MobileMenu} from './Menu'

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
      <MobileMenu />
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

        <motion.main sx={{variant: 'layout.content', bg: transparentHeader ? 'brownWhite' : 'white'}} layoutId='layout'>
          {/* exit={{opacity: 0}}
      initial='initial'
  animate */}
          {children}
        </motion.main>
        <Footer />
      </motion.div>
    </MenuContext.Provider>
  )
}
