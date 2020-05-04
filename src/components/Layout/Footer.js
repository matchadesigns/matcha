/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Footer = () => {
  const {title} = useSiteMetadata()
  return (
    <footer>
      © {new Date().getFullYear()} {title}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;{' '}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </footer>
  )
}
