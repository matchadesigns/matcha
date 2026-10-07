import React, {useState} from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// Full-size images are served by the Sanity CDN, resized and in a modern format
const lightboxSrc = url => `${url}?w=1600&fit=max&auto=format`

export const useLightbox = images => {
  const [index, setIndex] = useState(-1)
  const slides = images.filter(i => i?.asset?.url).map(i => ({src: lightboxSrc(i.asset.url)}))

  const lightbox = (
    <Lightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={slides}
      controller={{closeOnBackdropClick: true}}
    />
  )

  // Returns an onClick handler for the link wrapping image `i`
  const openAt = i => event => {
    event.preventDefault()
    setIndex(i)
  }

  return [lightbox, openAt]
}
