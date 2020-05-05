/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {jsx, Box} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Instagram} from '../components/Instagram'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import Seo from '../components/SEO'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const ActualitesPage = () => {
  const site = useSiteMetadata()

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  {
    /* }
  const {user, errors} = useStaticQuery(graphql`
    {
      user: instaUserNode {
        id
        username
        full_name
        biography
        edge_followed_by
        edge_follow
        profile_pic_url
        profile_pic_url_hd
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
*/
  }

  return (
    <Layout>
      <Seo
        title='Actualités'
        description={`Suivez l'actualité de Mâtcha Designs sur Instagram : @${site.instagram}`}
        keywords={site.keywords}
      />
      <Box p={5}>
        <Instagram />
      </Box>
    </Layout>
  )
}
export default ActualitesPage
