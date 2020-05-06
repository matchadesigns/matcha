/** @jsx jsx */
import {motion} from 'framer-motion'
import {jsx} from 'theme-ui'
import Forme from '../../assets/svg/HomepageAnimBottomRight.svg'
import Lacet from '../../assets/svg/HomepageAnimBottomRightLacet.svg'

export const AnimBottomRight = ({position = 'absolute', height, bottom, right}) => (
  <div sx={{}}>
    <motion.div
      animate={{
        rotate: [0, 10, -10, 3, 0]
      }}
      transition={{
        duration: 20,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity
      }}
      sx={{bottom, right, position}}
    >
      <Forme sx={{height, position}} />
    </motion.div>
    <motion.div
      animate={{
        rotate: [0, 3, 2, -2, 0]
      }}
      transition={{
        duration: 30,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity
      }}
      sx={{bottom, right, position}}
    >
      <Lacet sx={{height, position}} />
    </motion.div>
  </div>
)
