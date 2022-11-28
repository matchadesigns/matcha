/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {jsx} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'

const ContactPage = () => {
  const {
    page: {title, _rawBody: body},
    errors,
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "contact"}}) {
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
      <Main sx={{p: 4}}>
        <h1 hidden>{title}</h1>
        <div sx={{maxWidth: '600px', margin: 'auto'}}>
          <BlockContent blocks={body} />
        </div>
      </Main>
    </Layout>
  )
}
export default ContactPage
