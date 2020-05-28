// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: '.env'
})
const path = require('path')
const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

const queries = require('./src/lib/algolia')

module.exports = {
  siteMetadata: {
    title: 'Mâtcha Designs',
    siteUrl: 'https://matchadesigns.com',
    description:
      "Mâtcha Designs est un duo nantais proposant des services en décoration d'intérieur et graphisme. Retrouvez également leurs objets déco design sur la boutique en ligne.",
    author: '@matchadesigns'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_APIKEY,
        js: '/snipcart.3.0.14.js',
        styles: '/snipcart.3.0.14.css'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mâtcha Designs',
        short_name: 'matcha',
        start_url: '/',
        background_color: '#B67D20',
        theme_color: '#B67D20',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#B67D20',
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'matchadesigns_'
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries
        // chunkSize: 1000, // default: 1000
      }
    },
    'gatsby-plugin-zeit-now',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS
      }
    }
  ]
}
