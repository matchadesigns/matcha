/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {AiOutlinePlus} from 'react-icons/ai'
import {Grid, Image, jsx} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'

export const Qui = () => {
  const {
    page: {_rawBody: body, _rawSegments: segments},
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
    <div sx={{position: 'relative', p: 4, maxWidth: '600px', margin: 'auto'}}>
      <Grid
        sx={{
          textAlign: 'center',
          gridTemplateColumns: '1fr auto 1fr',
          // alignItems: 'center',
          'h2,h3': {lineHeight: 1, m: 0}
        }}
      >
        <div id='qui' sx={{color: '#8A8985'}}>
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
  )
}
