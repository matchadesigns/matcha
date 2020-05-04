import React from 'react'

import {Layout} from '../components/Layout'
import Seo from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <h1>Erreur 404</h1>
    <p>Désolé ! Cette page n'existe plus :(</p>
  </Layout>
)

export default NotFoundPage
