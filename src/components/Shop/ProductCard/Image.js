/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

export const Image = ({fluid, link}) => {
  const Image = () => <Img fluid={fluid} sx={{variant: 'images.card'}} />
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
