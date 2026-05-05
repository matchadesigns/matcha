import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {ProjectList} from '../components/Projects/ProjectList'
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
  toPlainText
} from '../lib/helpers'
import Seo from '../components/Seo'
import {BlockContent} from '../components/BlockContent'

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

  const {
    page: {title, _rawBody}
  } = data

  return (
    <Layout>
      {_rawBody && <BlockContent blocks={_rawBody} />}
      <Main>{projectNodes && <ProjectList nodes={projectNodes} />}</Main>
    </Layout>
  )
}

export function Head({data, location}) {
  const {page: {title, _rawBody}} = data
  return <Seo title={title} description={toPlainText(_rawBody)} location={location} />
}

export const query = graphql`query ProjectsPageQuery {
  projects: allSanityProject(
    sort: {publishedAt: DESC}
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
  ) {
    edges {
      node {
        ...projectCardFields
      }
    }
  }
  page: sanityPage(slug: {current: {eq: "realisations"}}) {
    title
    _rawBody
  }
}`

export default ProjectsPage
