/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import {Layout} from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Box sx={{p: 6, width: '40vw', margin: 'auto', textAlign: 'center'}}>
      <h1>Erreur 404</h1>
      <p>Désolé ! Cette page n'existe plus :(</p>
    </Box>
  </Layout>
)

export default NotFoundPage
