/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {graphql} from 'gatsby'

export const Image = ({image}) => {
  graphql`
    fragment productImageFields on SanityImageAsset {
      _id
      url
    }
  `
  const imageData = getGatsbyImageData(image.asset, {}, sanityConfig)
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      <GatsbyImage
        image={imageData}
        alt={'Image'}
        sx={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, .05)',
          ':hover': {
            cursor: 'pointer',
          },
        }}
        data-attribute="SRL"
      />
    </motion.div>
  )
}
