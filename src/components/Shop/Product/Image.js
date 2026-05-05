/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Image = ({image}) => {
  graphql`
    fragment productImageFields on SanityImageAsset {
      _id
      url
      gatsbyImageData(width: 600, placeholder: BLURRED)
    }
  `
  const imageData = getImage(image.asset)
  if (!imageData) return null
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      <GatsbyImage
        image={imageData}
        alt={'Image'}
        sx={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, .05)',
          ':hover': {
            cursor: 'pointer'
          }
        }}
        data-attribute="SRL"
      />
    </motion.div>
  )
}
