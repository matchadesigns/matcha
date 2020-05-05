/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Footer = () => {
  const {title, url} = useSiteMetadata()
  return (
    <footer sx={{bg: 'black', color: 'white', a: {color: 'white'}, p: 4, textAlign: 'center'}}>
      © {new Date().getFullYear()} <a href={url}>{title}</a>
      <div sx={{color: '#aaa'}}>
        Fabriqué avec <span>♥</span> à Nantes, avec{' '}
        <a href='https://www.gatsbyjs.org' target='_blank' noopener='true' noreferrer='true'>
          Gatsby
        </a>{' '}
        &amp;{' '}
        <a href='https://www.sanity.io' target='_blank' noopener='true' noreferrer='true'>
          Sanity
        </a>
      </div>
    </footer>
  )
}
