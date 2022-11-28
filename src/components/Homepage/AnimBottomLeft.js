/** @jsx jsx */
import {motion} from 'framer-motion'
import {jsx} from 'theme-ui'
import {Fragment} from 'react'
import Forme from '../../assets/svg/HomepageFormeBasGauche.svg'
import Lacet from '../../assets/svg/HomepageLacetBasGauche.svg'

export const AnimBottomLeft = ({
  position = 'absolute',
  height,
  bottom,
  left,
}) => (
  <Fragment>
    <motion.div
      animate={{
        rotate: [0, 5, 10, 5, 0],
      }}
      transition={{
        duration: 23,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity,
      }}
      sx={{bottom, left, position}}
    >
      <Forme sx={{height, position}} />
    </motion.div>
    <motion.div
      animate={{
        rotate: [0, 3, 2, -2, 0],
      }}
      transition={{
        duration: 30,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
      }}
      sx={{bottom, left, position}}
    >
      <Lacet sx={{height, position}} />
    </motion.div>
  </Fragment>
)
