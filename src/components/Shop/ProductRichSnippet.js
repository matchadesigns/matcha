import {add, format} from 'date-fns'
import {graphql, useStaticQuery} from 'gatsby'
import React from 'react'
import {JsonLd} from 'react-schemaorg'

export const ProductRichSnippet = ({title, path, image, description, barcode, category, publishedAt, price, sku}) => {
  const {
    site: {siteTitle, siteUrl}
  } = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
        siteTitle: title
        siteUrl: url
      }
    }
  `)
  const inStock = sku > 0
  return (
    <JsonLd
      item={{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        url: siteUrl + path,
        image,
        description,
        mpn: barcode,
        category: category,
        publishedAt,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          priceValidUntil: format(add(new Date(), {years: 1}), 'yyyy-MM-dd'),
          price: price.value,
          itemCondition: 'https://schema.org/NewCondition',
          availability: inStock ? 'http://schema.org/InStock' : 'https://schema.org/OutOfStock',
          url: siteUrl + path
        },
        brand: {
          '@type': 'Brand',
          name: siteTitle
        },
        sku
      }}
    />
  )
}
