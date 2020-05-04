/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import {Main} from '../components/Layout/Main'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Seo from '../components/SEO'
import {filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes} from '../lib/helpers'
import {Homepage} from '../components/Homepage'

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout transparentHeader noBranding>
      <Seo title={site.title} description={site.description} keywords={site.keywords} />
      <Homepage />
      <Main>
        <h1 hidden>{site.title}</h1>
        {projectNodes && <ProjectPreviewGrid title='Latest projects' nodes={projectNodes} browseMoreHref='/archive/' />}
      </Main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
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
