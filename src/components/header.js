import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'

import Logo from '../svgs/logo.svg'
import Matcha from '../svgs/matcha.svg'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'><Logo /> <Matcha /></Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li><Link to='/prestations/'>Prestations</Link></li>
          <li><Link to='/decoration-graphisme/'>Décoration &amp; graphisme</Link></li>
          <li><Link to='/design/'>Design</Link></li>
          <li><Link to='/actualites/'>Actualités</Link></li>
          <li><Link to='/a-propos/'>A propos</Link></li>
          <li><Link to='/contact/'>Contact</Link></li>
          <li><Link to='/archive/'>Archive</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
