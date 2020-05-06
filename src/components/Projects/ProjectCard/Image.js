/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import Img from 'gatsby-image'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment projectCardImageFields on SanityImageAsset {
      fluid {
        ...GatsbySanityImageFluid
      }
    }
  `
  const Image = () => (
    <Img
      fluid={image.asset.fluid}
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
  )
  return (
    <motion.div whileTap={{scale: 0.9}}>
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
