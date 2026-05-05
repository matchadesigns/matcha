/* eslint-disable multiline-ternary */
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'

export const Image = ({image, link}) => {
  const imageData = getImage(image)
  if (!imageData) return null
  const inner = <GatsbyImage image={imageData} alt='Image' />
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.9}}>
      {link ? <Link to={link}>{inner}</Link> : inner}
    </motion.div>
  )
}
