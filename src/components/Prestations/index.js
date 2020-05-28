/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Flex, Button as ThemeUiButton, Grid, jsx} from 'theme-ui'
import Crayon from '../../assets/svg/PrestationsCrayon.svg'
import Lampe from '../../assets/svg/PrestationsLampe.svg'
import Nuancier from '../../assets/svg/PrestationsNuancier.svg'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import {BlockContent} from '../BlockContent'
import {AnimBottom} from './AnimBottom'
import {AnimTop} from './AnimTop'
import {Fragment} from 'react'

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

  const DesignTitle = () => <h2>{segments[0].title}</h2>
  const Design = () => <BlockContent blocks={segments[0].body} />
  const GammeProduitTitle = () => <h2>{segments[1].title}</h2>
  const GammeProduit = () => <BlockContent blocks={segments[1].body} />
  const GraphismeTitle = () => <h2>{segments[2].title}</h2>
  const Graphisme = () => <BlockContent blocks={segments[2].body} />

  const colors = {design: '#BC866E', gammeProduit: '#D1A969', graphisme: '#8A8985'}

  return (
    <Fragment>
      <AnimTop height={['12vmin']} top={['0']} right={['20%']} />
      <AnimBottom height={['12vmin']} bottom={['12vmin']} left={['50%']} />
      <div sx={{position: 'relative', p: 4}} {...props}>
        <h1>Mâtcha, c'est quoi ?</h1>
        <Grid columns={[1, 1, 3]} gap={5} sx={{alignItems: 'flex-start', justifyItems: ['start'], height: 'full'}}>
          <div sx={{color: colors.design}}>
            <Flex sx={{alignItems: 'center'}}>
              <Nuancier sx={{width: ['15vmin', '10vmin'], pr: 3}} />
              <DesignTitle />
            </Flex>
            <Design />
            <Button to='/presta_deco.pdf' color={colors.design} target='_blank' rel='noopener noreferrer'>
              Voir détails prestations
            </Button>
          </div>
          <div sx={{color: colors.graphisme, mt: 3}}>
            <Flex sx={{alignItems: 'center'}}>
              <Crayon sx={{width: ['15vmin', '10vmin'], pr: 3}} />
              <GammeProduitTitle />
            </Flex>
            <Graphisme />
            <Button to='/presta_graphique.pdf' color={colors.graphisme} target='_blank' rel='noopener noreferrer'>
              Voir détails prestations
            </Button>
          </div>
          <div sx={{order: [3], color: colors.gammeProduit}}>
            <Flex sx={{alignItems: 'center'}}>
              <Lampe sx={{width: ['15vmin', '10vmin'], pr: 3}} />
              <GraphismeTitle />
            </Flex>
            <GammeProduit />
            <p>
              <Button to='/boutique/' color={colors.gammeProduit}>
                Voir la boutique en ligne
              </Button>
            </p>
          </div>
        </Grid>
      </div>
    </Fragment>
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
