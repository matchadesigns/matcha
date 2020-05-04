import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {ProjectList} from '../components/Projects/ProjectList'
import {filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes} from '../lib/helpers'

const ProjectsPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Layout>
      <Main>
        {projectNodes && <ProjectList title='Latest projects' nodes={projectNodes} browseMoreHref='/archive/' />}
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageQuery {
    projects: allSanityProject(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          ...projectCardFields
        }
      }
    }
  }
`

export default ProjectsPage
