/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {jsx, Grid, Image, Flex} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import Seo from '../components/Seo'
import {BlockContent} from '../components/BlockContent'
import {AiOutlinePlus} from 'react-icons/ai'

const QuiPage = () => {
  const {
    page: {title, _rawBody: body, _rawSegments: segments},
    errors
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "qui-sommes-nous"}}) {
        title
        _rawBody
        _rawSegments
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const Melo = () => <BlockContent blocks={segments[0].body} />
  const Geoffrey = () => <BlockContent blocks={segments[1].body} />

  return (
    <Layout>
      <Seo title={title} />
      <Main sx={{p: 4}}>
        <h1 hidden>{title}</h1>
        <div sx={{maxWidth: '600px', margin: 'auto'}}>
          <Grid
            sx={{
              textAlign: 'center',
              gridTemplateColumns: '1fr auto 1fr',
              // alignItems: 'center',
              'h2,h3': {lineHeight: 1, m: 0}
            }}
          >
            <div sx={{color: '#8A8985'}}>
              <Melo />
            </div>
            <div sx={{pt: 2}}>
              <AiOutlinePlus color='#D0846A' />
            </div>
            <div sx={{color: '#BC866E'}}>
              <Geoffrey />
            </div>
          </Grid>
          <Image src='/matcha.jpg' />
          <BlockContent blocks={body} />
        </div>
      </Main>
    </Layout>
  )
}
export default QuiPage
