/** @jsx jsx */
import {motion} from 'framer-motion'
import {useState} from 'react'
import {jsx} from 'theme-ui'
import '../../assets/styles/layout.css'
import {Footer} from './Footer'
import {Header} from './Header'

export const Layout = ({children, transparentHeader = false, noBranding = false, ...props}) => {
  const [showNav, setShowNav] = useState(false)
  const [isTransparentHeader, setTransparentHeader] = useState(transparentHeader)
  const [hasBranding, setHasBranding] = useState(!noBranding)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }
  return (
    <motion.main
      sx={{
        bg: 'brownWhite'
      }}
    >
      <Header
        onHideNav={handleHideNav}
        onShowNav={handleShowNav}
        showNav={showNav}
        isTransparent={isTransparentHeader}
        hasBranding={hasBranding}
      />

      <motion.div sx={{variant: 'layout.content', bg: transparentHeader ? 'brownWhite' : 'white'}} layoutId='layout'>
        {/* exit={{opacity: 0}}
      initial='initial'
  animate */}
        {children}
      </motion.div>
      <Footer />
    </motion.main>
  )
}
