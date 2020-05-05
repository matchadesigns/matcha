import React from 'react'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Prestations} from '../components/Prestations'
import {Helmet} from 'react-helmet'

const PrestationsPage = () => (
  <Layout>
    <Helmet>
      <link rel='canonical' href='/' />
    </Helmet>
    <Main>
      <Prestations />
    </Main>
  </Layout>
)

export default PrestationsPage
