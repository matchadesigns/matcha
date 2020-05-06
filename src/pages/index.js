/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Homepage} from '../components/Homepage'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../lib/useSiteMetadata'
import {Prestations} from '../components/Prestations'
import {Qui} from '../components/Qui'

const IndexPage = props => {
  const {
    // data,
    errors
  } = props
  const site = useSiteMetadata()

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

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
        <Qui />
      </Main>
    </Layout>
  )
}
/*
export const query = graphql`
  query IndexPageQuery {
  }
`
*/
export default IndexPage
