/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import {ProjectCard} from './ProjectCard'

export const ProjectList = ({title, nodes, ...props}) => (
  <Grid columns={[1, 1, 1, 2, 2, 3]} sx={{width: 'full'}} {...props}>
    {nodes && nodes.map(product => <ProjectCard key={product.id} {...product} />)}
  </Grid>
)
