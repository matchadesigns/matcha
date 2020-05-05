/** @jsx jsx */
import {jsx, Flex} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import {FaFacebookSquare, FaTwitterSquare, FaPinterestSquare} from 'react-icons/fa'

export const Social = ({path}) => {
  const {
    site: {siteUrl}
  } = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        siteUrl: url
      }
    }
  `)
  const Link = ({to, children}) => (
    <a href={to} target='_blank' rel='noopener noreferrer' sx={{display: 'flex'}}>
      {children}
    </a>
  )
  return (
    <Flex sx={{alignItems: 'center', color: 'textMuted', mt: 3}}>
      Partager :{' '}
      <Link to={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${path}`}>
        <FaFacebookSquare size={24} sx={{ml: 1, color: 'textMuted'}} />
      </Link>
      <Link to={`https://twitter.com/intent/tweet?text=${siteUrl}${path}`}>
        <FaTwitterSquare size={24} sx={{ml: 1, color: 'textMuted'}} />
      </Link>
      <Link to={`https://pinterest.com/pin/create/button/?url=${siteUrl}${path}`}>
        <FaPinterestSquare size={24} sx={{ml: 1, color: 'textMuted'}} />
      </Link>
    </Flex>
  )
}
