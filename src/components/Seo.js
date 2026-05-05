import PropTypes from 'prop-types'
import React from 'react'
import {truncateString} from '../lib/helpers'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const Seo = ({title, description, image, product, article, noIndex = false, location}) => {
  const site = useSiteMetadata()
  const pathname = location?.pathname

  const seo = {
    title: title && (title.length <= 60 ? (title.includes(site.title) ? title : `${title} — ${site.title}`) : title),
    description: truncateString(description || site.description, 147),
    image: image || `${site.url}/matcha.jpg`,
    url: pathname && `${site.url}${pathname}`
  }

  return (
    <>
      <html lang='fr-FR' amp />
      <link rel='dns-prefetch' href='//cdn.sanity.io/' />
      {seo.title && (
        <title itemProp='name' lang='fr-FR'>
          {seo.title}
        </title>
      )}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='description' content={seo.description} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='image' content={seo.image} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='theme-color' content='#3A3419' />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.url && <link rel='canonical' href={seo.url} />}
      {(article ? true : null) && <meta property='og:type' content='article' />}
      {(product ? true : null) && <meta property='og:type' content='product' />}
      {!product && !article && <meta property='og:type' content='website' />}
      {site.author && <meta name='twitter:creator' content={site.author} />}
      {noIndex && <meta name='robots' content='noindex' />}
    </>
  )
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  product: false,
  location: null
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  product: PropTypes.bool,
  location: PropTypes.object
}

export default Seo
