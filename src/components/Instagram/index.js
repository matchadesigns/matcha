/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Fragment} from 'react'
import {Button, Flex, Grid, jsx} from 'theme-ui'
import {mapEdgesToNodes} from '../../lib/helpers'
import {GraphQLErrorList} from '../GraphQLErrorList'
import {Post} from './Post'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Instagram = props => {
  const {instagram} = useSiteMetadata()
  const {insta, errors} = useStaticQuery(graphql`
    {
      insta: allInstaNode(sort: {order: DESC, fields: timestamp}) {
        edges {
          node {
            ...InstagramPostFields
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
    <Fragment>
      <Flex sx={{alignContent: 'center', flexDirection: 'column'}}>
        <Grid columns={[1, 2, 2, '320px 320px 320px']} sx={{width: 'auto', mx: 'auto'}} {...props}>
          {nodes &&
            nodes.map(post => {
              console.log(post)
              return <Post key={post.id} {...post} />
            })}
        </Grid>
        <div sx={{textAlign: 'center', pt: 5}}>
          <Button
            as='a'
            href={`https://instagram.com/${instagram}`}
            sx={{display: 'inline'}}
            target='_blank'
            noopener='true'
            noreferrer='true'
          >
            Voir plus de posts
          </Button>
        </div>
      </Flex>
    </Fragment>
  )
}
