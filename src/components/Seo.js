import PropTypes from 'prop-types'
import React from 'react'
import {truncateString} from '../lib/helpers'
import {useSiteMetadata} from '../lib/useSiteMetadata'

// Social networks expect ~1200px wide images: let the Sanity CDN resize them
const socialImage = url => (url && url.startsWith('https://cdn.sanity.io/') ? `${url}?w=1200&h=630&fit=crop&auto=format` : url)

const Seo = ({title = null, description = null, image = null, product = false, article = false, noIndex = false, location = null}) => {
  const site = useSiteMetadata()
  const pathname = location?.pathname

  const seo = {
    title: title && (title.length <= 60 ? (title.includes(site.title) ? title : `${title} — ${site.title}`) : title),
    description: truncateString(description || site.description, 147),
    image: socialImage(image) || `${site.url}/matcha.jpg`,
    url: pathname && `${site.url}${pathname}`
  }

  return (
    <>
      <html lang='fr-FR' />
      <link rel='dns-prefetch' href='//cdn.sanity.io/' />
      {seo.title && (
        <title>
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
      <meta property='og:site_name' content={site.title} />
      <meta property='og:locale' content='fr_FR' />
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

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  product: PropTypes.bool,
  location: PropTypes.object
}

export default Seo
