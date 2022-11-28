/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
// import {Main} from '../components/Layout/Main'
import {Qui} from '../components/Qui'
import Seo from '../components/Seo'

const QuiPage = () => {
  const {
    page: {title},
    errors,
  } = useStaticQuery(graphql`
    {
      page: sanityPage(slug: {current: {eq: "a-propos"}}) {
        title
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }

  return (
    <Layout>
      <Seo title={title} />
      <h1>{title}</h1>
      <Qui />
    </Layout>
  )
}
export default QuiPage
