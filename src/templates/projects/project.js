/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx, Styled} from 'theme-ui'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import Seo from '../../components/SEO'
import {Project} from '../../components/Projects/Project'
import {ProjectList} from '../../components/Projects/ProjectList'
import {Layout} from '../../components/Layout'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'

const ProjectPage = ({data, errors, ...props}) => {
  const {project, sameCategoryProjects} = data
  const {title, category, images, _rawBody} = project
  const sameCategoryProjectsNodes = mapEdgesToNodes(sameCategoryProjects)
  const image = images && images.images && images.images[0] && images.images[0].asset.fluid.src
  const body = _rawBody && toPlainText(_rawBody)
  return (
    <Layout {...props}>
      {errors && <Seo title='GraphQL Error' />}
      {project && <Seo title={title} description={body} image={image} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {project && <Project {...project} />}
      {sameCategoryProjectsNodes && sameCategoryProjectsNodes.length > 0 && (
        <Box mt={3}>
          <Styled.h4>Dans la catégorie {category.title}</Styled.h4>
          <ProjectList nodes={sameCategoryProjectsNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage($project: String, $category: String) {
    project: sanityProject(id: {eq: $project}) {
      ...projectFields
    }
    sameCategoryProjects: allSanityProject(
      filter: {id: {ne: $project}, category: {id: {eq: $category}}}
      sort: {order: [DESC], fields: [publishedAt]}
      limit: 6
    ) {
      edges {
        node {
          ...projectCardFields
        }
      }
    }
  }
`

export default ProjectPage
