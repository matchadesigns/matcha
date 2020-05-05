/** @jsx jsx */
import {motion} from 'framer-motion'
import {IoIosArrowRoundDown} from 'react-icons/io'
import {jsx} from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Arrow = () => (
  <motion.div animate={{scale: 2}} transition={{duration: 0.2}} whileHover={{scale: 2.45}} whileTap={{scale: 1.9}}>
    <AnchorLink href='#prestations'>
      <IoIosArrowRoundDown size={24} />
    </AnchorLink>
  </motion.div>
)
