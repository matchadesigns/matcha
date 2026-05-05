/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
// import {Main} from '../components/Layout/Main'
import {Qui} from '../components/Qui'
import Seo from '../components/Seo'

const QuiPage = ({data, errors}) => {
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  const {page: {title}} = data
  return (
    <Layout>
      <h1>{title}</h1>
      <Qui />
    </Layout>
  )
}

export function Head({data, location}) {
  return <Seo title={data.page.title} location={location} />
}

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "a-propos"}}) {
      title
    }
  }
`

export default QuiPage
