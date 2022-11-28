/* eslint-disable multiline-ternary */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {sanityConfig} from '../../../../sanity-config'
import {GatsbyImage} from 'gatsby-plugin-image'
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {Link} from 'gatsby'

export const Image = ({image, link}) => {
  const Image = () => (
    <GatsbyImage
      image={getGatsbyImageData(
        image,
        {
          maxWidth: 300,
        },
        sanityConfig
      )}
      alt={'Image'}
      sx={{variant: 'images.card'}}
    />
  )
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      {link ? (
        <Link to={link}>
          <Image />
        </Link>
      ) : (
        <Image />
      )}
    </motion.div>
  )
}
