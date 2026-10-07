/** @jsx jsx */
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Grid, jsx} from 'theme-ui'

export const Thumbs = ({thumbs, alt = '', onOpen}) => {
  if (!thumbs) return null
  return (
    <Grid sx={{mb: 2, mr: 2}} columns={[2, 3]}>
      {thumbs.map((i, index) => (
        <a key={i.asset._id} href={i.asset.url} onClick={onOpen(index)} aria-label={`Agrandir l'image ${alt}`.trim()}>
          <GatsbyImage
            image={getGatsbyImageData(i.asset, {width: 400}, sanityConfig)}
            alt={alt}
            sx={{
              boxShadow: '0px 10px 10px rgba(0, 0, 0, .035)',
              ':hover': {
                cursor: 'pointer'
              }
            }}
          />
        </a>
      ))}
    </Grid>
  )
}
