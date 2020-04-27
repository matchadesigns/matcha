/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
import Header from './header'

import '../styles/layout.css'
import '../fonts/fonts.css'

import styles from './layout.module.css'

export const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <React.Fragment>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div
      className={styles.content}
      sx={{
        backgroundColor: theme => theme.colors.gray
      }}
    >
      {children}
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;{' '}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer>
  </React.Fragment>
)
