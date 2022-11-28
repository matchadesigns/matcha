/** @jsx jsx */
import {motion} from 'framer-motion'
import {jsx} from 'theme-ui'
import {Fragment} from 'react'
import HomepageFormeHautGauche from '../../assets/svg/HomepageFormeHautGauche.svg'
import HomepageLacetHautGauche from '../../assets/svg/HomepageLacetHautGauche.svg'

export const AnimTopLeft = ({position = 'absolute', width, top, left}) => (
  <Fragment>
    <motion.div
      animate={{
        rotate: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration: 30,
        ease: 'linear',
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity,
        repeatDelay: 0,
      }}
      sx={{top, left, position}}
    >
      <HomepageFormeHautGauche sx={{width, position}} />
    </motion.div>

    <motion.div
      animate={{
        rotate: [0, 5, 8, -2, 0],
      }}
      transition={{
        duration: 20,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
        loop: Infinity,
        repeatDelay: 0,
      }}
      sx={{top, left, position}}
    >
      <HomepageLacetHautGauche sx={{width, position}} />
    </motion.div>
  </Fragment>
)
