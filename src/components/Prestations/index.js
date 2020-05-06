/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Button as ThemeUiButton, Grid, jsx} from 'theme-ui'
import Crayon from '../../assets/svg/PrestationsCrayon.svg'
import Lampe from '../../assets/svg/PrestationsLampe.svg'
import Nuancier from '../../assets/svg/PrestationsNuancier.svg'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import {BlockContent} from '../BlockContent'
import {AnimBottom} from './AnimBottom'
import {AnimTop} from './AnimTop'

export const Prestations = props => {
  const {
    page: {title, _rawSegments: segments},
    errors
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "prestations"}}) {
        title
        _rawSegments
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  const Design = () => <BlockContent blocks={segments[0].body} />
  const GammeProduit = () => <BlockContent blocks={segments[1].body} />
  const Graphisme = () => <BlockContent blocks={segments[2].body} />

  const colors = {design: '#BC866E', gammeProduit: '#D1A969', graphisme: '#8A8985'}

  return (
    <div sx={{position: 'relative', p: 4}} {...props}>
      <AnimTop height={['12vmin']} top={['0']} right={['20%']} />
      <AnimBottom height={['12vmin']} bottom={['12vmin']} left={['50%']} />
      <Grid
        columns={[1, 1, '2fr 1fr 2fr']}
        sx={{alignItems: 'center', justifyItems: ['start', 'center'], height: 'full'}}
      >
        <Grid sx={{order: [2, 1]}}>
          <div sx={{color: colors.design}}>
            <Nuancier sx={{width: '8vmin'}} />
            <Design />
            <Button to='/presta_deco.pdf' color={colors.design} target='_blank' rel='noopener noreferrer'>
              Voir détails prestations
            </Button>
          </div>
          <div sx={{color: colors.graphisme, mt: 3}}>
            <Crayon sx={{width: '8vmin'}} />
            <Graphisme />
            <Button to='/presta_graphique.pdf' color={colors.graphisme} target='_blank' rel='noopener noreferrer'>
              Voir détails prestations
            </Button>
          </div>
        </Grid>
        <Grid sx={{order: [1, 2]}}>
          <h1 id='prestations'>{title}</h1>
        </Grid>
        <Grid sx={{order: [3], color: colors.gammeProduit}}>
          <Lampe sx={{width: '8vmin'}} />
          <GammeProduit />
          <p>
            <Button to='/boutique/' color={colors.gammeProduit}>
              Voir la boutique en ligne
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

const Button = ({to, color, children, ...props}) => (
  <ThemeUiButton
    as='a'
    href={to}
    sx={{
      display: 'inline',
      width: 'auto',
      bg: color,
      color: 'white',
      mt: 3,
      ':hover': {textDecoration: 'none'}
    }}
    {...props}
  >
    {children}
  </ThemeUiButton>
)
