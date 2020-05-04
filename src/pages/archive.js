import React from 'react'
import {graphql} from 'gatsby'
import {Main} from '../components/Layout/Main'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Seo from '../components/SEO'
import {Layout} from '../components/Layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanitySampleProject(
      limit: 12
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes = data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <Seo title='Archive' />
      <Main>
        <h1 className={responsiveTitle1}>Projects</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Main>
    </Layout>
  )
}

export default ArchivePage
