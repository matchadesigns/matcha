/** @jsx jsx */
import {jsx, Grid} from 'theme-ui'
import {truncateString} from '../../lib/helpers'

export const Post = ({caption, thumbnails}) => (
  <Grid>
    <img src={thumbnails[2].src} sx={{width: 'full'}} />
    {truncateString(caption, 140)}
  </Grid>
)
