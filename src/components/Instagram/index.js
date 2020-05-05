/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import {mapEdgesToNodes} from '../../lib/helpers'
import {GraphQLErrorList} from '../GraphQLErrorList'
import {Post} from './Post'

export const Instagram = props => {
  const {insta, errors} = useStaticQuery(graphql`
    {
      insta: allInstaNode {
        edges {
          node {
            id
            caption
            thumbnails {
              src
              config_width
              config_height
            }
          }
        }
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  const nodes = mapEdgesToNodes(insta)
  return (
    <Grid columns={[1, 1, 1, 2, 2, 7]} sx={{width: 'full'}} {...props}>
      {nodes && nodes.map(post => <Post key={post.id} {...post} />)}
    </Grid>
  )
}
