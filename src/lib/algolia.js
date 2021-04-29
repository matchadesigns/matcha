const productQuery = `
{
    products: allSanityProduct {
        edges {
            node {
                objectID: id
                title
                slug {
                    current
                }
                category {
                    title
                    slug {
                        current
                    }
                }
                images {
                    asset {
                      _id
                    }
                }
                price {
                    formatted
                }
            }
        }
    }
}
`

const projectQuery = `
{
  projects: allSanityProject {
    edges {
      node {
        objectID: id
        title
        subtitle
        slug {
          current
        }
        category {
          title
          slug {
            current
          }
        }
        images {
          asset {
            _id
          }
        }
      }
    }
  }
}
`
/*
const blogPostQuery = `
{
    blogPosts: allSanityBlogPost {
      edges {
        node {
          objectID: id
          publishedAt
          _rawSlug
          _rawTitle
          _rawExcerpt
          _rawBody
          postLanguages: language
          image {
            asset {
              fluid(maxWidth: 240) {
                sizes
                aspectRatio
                base64
                src
                srcWebp
                srcSet
                srcSetWebp
              }
            }
          }
          categories {
            id
            _rawTitle
            _rawSlug
          }
        }
      }
    }
}`

const profileQuery = `
{
    profiles: allSanityProfile {
      edges {
        node {
          objectID: id
          _rawTitle
          _rawSlug
          avatar {
            asset {
              fluid(maxWidth: 240) {
                sizes
                aspectRatio
                base64
                src
                srcWebp
                srcSet
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`
*/
const flatten = arr =>
  arr.map(({node: {frontmatter, ...rest}}) => ({
    ...frontmatter,
    ...rest
  }))
const settings = {attributesToSnippet: ['excerpt:20']}
const queries = [
  {
    query: productQuery,
    transformer: ({data}) => flatten(data.products.edges),
    indexName: 'Products',
    settings
  },
  {
    query: projectQuery,
    transformer: ({data}) => flatten(data.projects.edges),
    indexName: 'Projects',
    settings
  }
  /*
  {
    query: blogPostQuery,
    transformer: ({ data }) => flatten(data.blogPosts.edges),
    indexName: `BlogPosts`,
    settings,
  },
  {
    query: profileQuery,
    transformer: ({ data }) => flatten(data.profiles.edges),
    indexName: `Profiles`,
    settings,
  },
  */
]
module.exports = queries
