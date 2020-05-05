/** @jsx jsx */
import {motion} from 'framer-motion'
import {Grid, jsx} from 'theme-ui'
import {Image} from './Image'
import {Thumbs} from './Thumbs'

export const Images = ({item, thumbs, image}) => (
  <Grid columns={[1, 1, 1, 1, thumbs.length > 1 ? '2fr 5fr' : 1]}>
    {thumbs.length > 0 && (
      <motion.div variants={item} sx={{order: [1, 1, 1, 1, thumbs.length > 1 ? 0 : 1]}}>
        <Thumbs thumbs={thumbs} />
      </motion.div>
    )}
    <motion.div variants={item} sx={{order: [0, 0, 0, 0, thumbs.length > 1 ? 1 : 0]}}>
      {image && <Image image={image} />}
    </motion.div>
  </Grid>
)
