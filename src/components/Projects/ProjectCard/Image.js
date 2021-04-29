/* eslint-disable multiline-ternary */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment projectCardImageFields on SanityImageAsset {
      _id
    }
  `

  const imageData = getGatsbyImageData(image, {}, sanityConfig)
  return (
    <motion.div whileTap={{scale: 0.9}}>
      {link ? (
        <Link to={link}>
          <GatsbyImage
            image={imageData}
            alt={'Image'}
            sx={{
              variant: 'images.card',
              filter: 'grayscale(100%)',
              ':-webkit-filter': 'grayscale(100%)',
              '&:hover': {
                filter: 'none',
                ':-webkit-filter': 'none'
              },
              height: 'full',
              width: 'full'
            }}
          />
        </Link>
      ) : (
        <Image />
      )}
    </motion.div>
  )
}
