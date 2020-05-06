/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Prestations} from '../components/Prestations'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const PrestationsPage = () => {
  const site = useSiteMetadata()
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  const {
    page: {title},
    errors
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "prestations"}}) {
        title
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  return (
    <Layout>
      <Seo title={title} description={site.description} keywords={site.keywords} />
      <Main>
        <Prestations />
      </Main>
    </Layout>
  )
}
export default PrestationsPage
