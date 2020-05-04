/** @jsx jsx */
import {jsx} from 'theme-ui'
import {motion} from 'framer-motion'
import Img from 'gatsby-image'
import {wrap} from '@popmotion/popcorn'
import {useState} from 'react'
import {graphql} from 'gatsby'

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const Arrow = ({children, ...props}) => (
  <div
    {...props}
    sx={{
      top: 'calc(50% - 20px)',
      position: 'absolute',
      background: 'white',
      borderRadius: '30px',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '18px',
      zIndex: 2
    }}
  >
    {children}
  </div>
)

export const Images = ({images}) => {
  graphql`
    fragment projectImageFields on SanityImageAsset {
      fluid {
        ...GatsbySanityImageFluid
      }
    }
  `
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <div sx={{width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          x: {type: 'spring', stiffness: 300, damping: 200},
          opacity: {duration: 0.1}
        }}
        drag='x'
        dragConstraints={{left: 0, right: 0}}
        dragElastic={1}
        onDragEnd={(e, {offset, velocity}) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
        sx={{width: '100%'}}
      >
        <Img fluid={images[imageIndex].asset.fluid} sx={{width: '100%'}} />
      </motion.div>
      <Arrow onClick={() => paginate(1)} sx={{right: '10px', boxShadow: '0 5px 8px rgba(0,0,0,0.15)'}}>
        ‣
      </Arrow>
      <Arrow
        onClick={() => paginate(-1)}
        sx={{left: '10px', transform: 'scale(-1)', boxShadow: '0 -5px 8px rgba(0,0,0,0.15)'}}
      >
        ‣
      </Arrow>
    </div>
  )
}
