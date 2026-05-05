/** @jsx jsx */
import {jsx, Flex} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'
import {Link} from 'gatsby'
import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/instagram.svg'

export const Footer = () => {
  const {title, url, facebook, instagram} = useSiteMetadata()
  return (
    <footer
      sx={{
        variant: "layout.footer",
      }}
    >
      <div
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: 3,
          mb: 1,
        }}
      >
        © {new Date().getFullYear()} <a href={url}>{title}</a>
      </div>
      <div sx={{ color: "brownWhite", opacity: 0.8, fontSize: 1 }}>
        Fabriqué à Nantes, avec{" "}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.sanity.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sanity
        </a>
      </div>
      <div sx={{ pt: 3, fontSize: 2 }}>
        <Link to="/mentions-legales">Mentions légales</Link> |{" "}
        <Link to="/cgv">CGV</Link> | <Link to="/contact">Contact</Link>
      </div>
      <Flex
        sx={{
          pt: 3,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 'inherit'
        }}
      >
        <a
          href={`https://facebook.com/${facebook}`}
          sx={{display: 'flex', pr: 1}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook sx={{width: '32px', mr: 1}} />
        </a>
        <a
          href={`https://instagram.com/${instagram}`}
          sx={{display: 'flex'}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{width: '32px'}} />
        </a>
      </Flex>
    </footer>
  )
}
