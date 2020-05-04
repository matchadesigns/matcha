/** @jsx jsx */
import {motion} from 'framer-motion'
import {IoIosArrowRoundDown} from 'react-icons/io'
import {jsx} from 'theme-ui'

export const Arrow = () => (
  <motion.div animate={{scale: 2}} transition={{duration: 0.2}} whileHover={{scale: 2.45}} whileTap={{scale: 1.9}}>
    <IoIosArrowRoundDown size={24} />
  </motion.div>
)
