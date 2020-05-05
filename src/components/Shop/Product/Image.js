/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

export const Image = ({image}) => {
  graphql`
    fragment productImageFields on SanityImageAsset {
      fluid(maxWidth: 800) {
        ...GatsbySanityImageFluid_noBase64
      }
    }
  `
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      <Img
        fluid={image.asset.fluid}
        sx={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, .05)'
        }}
      />
    </motion.div>
  )
}
