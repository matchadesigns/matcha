/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'
import {StaticImage} from 'gatsby-plugin-image'

const ContactPage = ({data, errors}) => {
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  const {page: {title, _rawBody: body}} = data
  return (
    <Layout>
      <Main sx={{p: 4}}>
        <div sx={{display: 'flex', justifyContent: 'center'}}>
          <StaticImage
            src="../assets/images/collectif-meljo-202601-338bis-Modifier-WEB.jpg"
            alt="Matcha Designs"
            style={{margin: '0 auto', width: '100%', maxWidth: '500px'}}
          />
        </div>
        <div sx={{maxWidth: '600px', margin: 'auto'}}>
          <BlockContent blocks={body} />
        </div>
      </Main>
    </Layout>
  )
}

export function Head({data, location}) {
  return <Seo title={data.page.title} location={location} />
}

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "contact"}}) {
      title
      _rawBody
    }
  }
`

export default ContactPage
