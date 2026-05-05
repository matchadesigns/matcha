/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Prestations} from '../components/Prestations'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const PrestationsPage = ({data, errors}) => {
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  return (
    <Layout>
      <Prestations />
    </Layout>
  )
}

export function Head({data, location}) {
  const site = useSiteMetadata()
  return <Seo title={data.page.title} description={site?.description} location={location} />
}

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "prestations"}}) {
      title
    }
  }
`

export default PrestationsPage
