/** @jsx jsx */
import {motion} from 'framer-motion'
import {graphql} from 'gatsby'
import {SRLWrapper} from 'simple-react-lightbox'
import {Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Thumbs} from './Thumbs'

export const Images = ({thumbs, image}) => {
  graphql`
    fragment projectImageFields on SanityImageAsset {
      _id
    }
  `

  const item = {
    hidden: {opacity: 0},
    show: {opacity: 1},
  }
  return (
    <SRLWrapper>
      <Grid columns={1}>
        <motion.div variants={item}>
          {image && <Image image={image} />}
        </motion.div>
        {thumbs.length > 0 && (
          <motion.div variants={item}>
            <Thumbs thumbs={thumbs} />
          </motion.div>
        )}
      </Grid>
    </SRLWrapper>
  )
}
