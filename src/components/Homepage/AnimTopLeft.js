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
        rotate: [0, 5, 10, 5, 0, -5, -10, -5, 0]
      }}
      transition={{
        duration: 30,
        ease: 'easeInOut',
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
        loop: Infinity
        // repeatDelay: 4
      }}
      sx={{top, left, position}}
    >
      <HomepageFormeHautGauche sx={{width, position}} />
    </motion.div>

    <motion.div
      animate={{
        rotate: [0, 5, 8, -2, 0]
      }}
      transition={{
        duration: 30,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity
        // repeatDelay: 4
      }}
      sx={{top, left, position}}
    >
      <HomepageLacetHautGauche sx={{width, position}} />
    </motion.div>
  </Fragment>
)
