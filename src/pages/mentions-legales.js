/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Card, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
// import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'
import {BlockContent} from '../components/BlockContent'

const MentionsLegalesPage = () => {
  const {
    page: {title, _rawBody},
    errors
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "mentions-legales"}}) {
        title
        _rawBody
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return (
    <Layout>
      <Seo title={title} />
      <Card p={4}>
        <h1>{title}</h1>
        <BlockContent blocks={_rawBody} />
      </Card>
    </Layout>
  )
}
export default MentionsLegalesPage
