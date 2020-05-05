/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Homepage} from '../components/Homepage'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Prestations} from '../components/Prestations'
import Seo from '../components/SEO'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const IndexPage = () => {
  const site = useSiteMetadata()

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  return (
    <Layout transparentHeader noBranding>
      <Seo title={site.title} description={site.description} keywords={site.keywords} />
      <Homepage />
      <Main>
        <h1 hidden>{site.title}</h1>
        <p hidden>{site.description}</p>
        <Prestations />
      </Main>
    </Layout>
  )
}
export default IndexPage
