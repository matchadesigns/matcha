/** @jsx jsx */
import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {Grid, jsx} from 'theme-ui'
import {useLightbox} from '../../Lightbox'
import {Image} from './Image'
import {Thumbs} from './Thumbs'

export const Images = ({thumbs, image, title}) => {
  graphql`
    fragment projectImageFields on SanityImageAsset {
      _id
      url
      gatsbyImageData(width: 1200, placeholder: BLURRED)
    }
  `

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1}
  }
  const [lightbox, openAt] = useLightbox([image, ...thumbs])
  return (
    <Grid columns={1}>
      <motion.div variants={item}>
        {image && <Image image={image} alt={title} onClick={openAt(0)} />}
      </motion.div>
      {thumbs.length > 0 && (
        <motion.div variants={item}>
          <Thumbs thumbs={thumbs} alt={title} onOpen={i => openAt(i + 1)} />
        </motion.div>
      )}
      {lightbox}
    </Grid>
  )
}
