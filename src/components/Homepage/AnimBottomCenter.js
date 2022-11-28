/** @jsx jsx */
import {motion} from 'framer-motion'
import {jsx} from 'theme-ui'
import {Fragment} from 'react'
import Forme from '../../assets/svg/HomepageAnimBottomCenter.svg'

export const AnimBottomCenter = ({
  position = 'absolute',
  height,
  bottom,
  right,
}) => (
  <Fragment>
    <motion.div
      animate={{
        rotate: [0, -5, -10, -5, 0],
      }}
      transition={{
        duration: 20,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity,
      }}
      sx={{bottom, right, position}}
    >
      <Forme sx={{height, position}} />
    </motion.div>
  </Fragment>
)
