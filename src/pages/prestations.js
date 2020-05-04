import {graphql} from 'gatsby'
import React from 'react'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'

const PrestationsPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const {
    page: {title, _rawSegments: segments}
  } = data

  const Design = () => <BlockContent blocks={segments[0].body} />
  const GammeProduit = () => <BlockContent blocks={segments[1].body} />
  const IdentiteVisuelle = () => <BlockContent blocks={segments[2].body} />

  return (
    <Layout>
      <Main>
        <h1>{title}</h1>
        <Design />
        <GammeProduit />
        <IdentiteVisuelle />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query PrestationsPageQuery {
    page: sanityPage(slug: {current: {eq: "prestations"}}) {
      title
      _rawSegments
    }
  }
`

export default PrestationsPage
