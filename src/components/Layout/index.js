/** @jsx jsx */
import {motion} from 'framer-motion'
import React, {useState} from 'react'
import {jsx} from 'theme-ui'
import '../../assets/styles/layout.css'
import {Footer} from './Footer'
import {Header} from './Header'
import {Mobile as MobileMenu} from './Menu'
import {Cart} from './Header/Cart'
import {SearchMobile} from './Header/SearchMobile'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Script } from "gatsby"  

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
        <div
          sx={{
            position: transparentHeader ? 'fixed' : 'sticky',
            display: ['flex', 'flex', 'flex', 'none'],
            bg: 'red',
            width: '100%',
            p: 1,
            zIndex: 6,
            justifyContent: 'space-between'
          }}
        >
          <Cart className='snipcart-checkout' sx={{order: 0, pr: 3}} />
          <SearchMobile />
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
            {children}
            
          </motion.main>
          <Footer />
          <Script id="first-unique-id" dangerouslySetInnerHTML={{ __html: `window.SnipcartSettings = {publicApiKey: "${process.env.GATSBY_SNIPCART_APIKEY}",loadStrategy: "on-user-interaction"};`}} />
          <Script id="snipcart-2" dangerouslySetInnerHTML={{__html: `(function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();`}} />
        </motion.div>
      </SimpleReactLightbox>
    </MenuContext.Provider>
  )
}
