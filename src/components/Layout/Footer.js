/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Footer = () => {
  const {title, url} = useSiteMetadata()
  return (
    <footer
      sx={{
        variant: 'layout.footer'
      }}
    >
      © {new Date().getFullYear()} <a href={url}>{title}</a>
      <div sx={{color: '#aaa'}}>
        Fabriqué avec ♥ à Nantes, avec{' '}
        <a href='https://www.gatsbyjs.org' target='_blank' rel='noopener noreferrer'>
          Gatsby
        </a>{' '}
        &amp;{' '}
        <a href='https://www.sanity.io' target='_blank' rel='noopener noreferrer'>
          Sanity
        </a>
      </div>
    </footer>
  )
}
