/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Instagram} from '../components/Instagram'
import {Layout} from '../components/Layout'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const ActualitesPage = () => {
  const site = useSiteMetadata()

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Seo
        title='Actualités'
        description={`Suivez l'actualité de Mâtcha Designs sur Instagram : @${site.instagram}`}
        keywords={site.keywords}
      />
      <Box p={5}>
        {/*Suivez l'actualité de Mâtcha Designs sur Instagram : @${site.instagram}*/}
        <Instagram /> 
      </Box>
    </Layout>
  )
}
export default ActualitesPage
