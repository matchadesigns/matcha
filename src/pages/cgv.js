/** @jsx jsx */
import {graphql} from 'gatsby'
import {Card, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
// import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'
import {BlockContent} from '../components/BlockContent'

const CgvPage = ({data, errors}) => {
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  const {page: {title, _rawBody}} = data
  return (
    <Layout>
      <Card p={4}>
        <h1>{title}</h1>
        <BlockContent blocks={_rawBody} />
      </Card>
    </Layout>
  )
}

export function Head({data, location}) {
  return <Seo title={data.page.title} location={location} />
}

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "cgv"}}) {
      title
      _rawBody
    }
  }
`

export default CgvPage
