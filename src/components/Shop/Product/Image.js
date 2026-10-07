/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Image = ({image, alt = '', onClick}) => {
  graphql`
    fragment productImageFields on SanityImageAsset {
      _id
      url
      gatsbyImageData(width: 1200, placeholder: BLURRED)
    }
  `
  const imageData = getImage(image.asset)
  if (!imageData) return null
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      <a href={image.asset.url} onClick={onClick} aria-label={`Agrandir l'image ${alt}`.trim()}>
        <GatsbyImage
          image={imageData}
          alt={alt}
          loading='eager'
          sx={{
            boxShadow: '0px 0px 20px rgba(0, 0, 0, .05)',
            ':hover': {
              cursor: 'pointer'
            }
          }}
        />
      </a>
    </motion.div>
  )
}
