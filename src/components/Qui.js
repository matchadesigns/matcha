/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {AiOutlinePlus} from 'react-icons/ai'
import {Text, Grid, jsx} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import Img from 'gatsby-image'

export const Qui = () => {
  const {
    page: {_rawBody: body, _rawSegments: segments},
    image,
    errors
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "a-propos"}}) {
        title
        _rawBody
        _rawSegments
      }
      image: file(relativePath: {eq: "quisommesnous.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const Melo = () => <BlockContent blocks={segments[0].body} />
  const Geoffrey = () => <BlockContent blocks={segments[1].body} />

  return (
    <div id='qui' sx={{position: 'relative', p: 4, pt: ['11em', '11em', '11em', '11em', '9em'], maxWidth: ['full', 'full', '75vmin', '75vmin'], margin: 'auto'}}>
      <Text sx={{textAlign: 'center'}}>
        <h2 sx={{fontSize: '2.5em', pb: 3}}>À propos</h2>
      </Text>
      <Grid
        sx={{
          textAlign: 'center',
          gridTemplateColumns: '1fr auto 1fr',
          // alignItems: 'center',
          'h2,h3': {lineHeight: 1, m: 0},
          pb: 4
        }}
      >
        <div sx={{color: '#D0846A'}}>
          <Melo />
        </div>
        <div sx={{pt: 2}}>
          <AiOutlinePlus color='#D0846A' />
        </div>
        <div sx={{color: '#BC866E'}}>
          <Geoffrey />
        </div>
      </Grid>
      {image && image.childImageSharp && <Img fluid={image.childImageSharp.fluid} />}
      <BlockContent blocks={body} />
    </div>
  )
}
