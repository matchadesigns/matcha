/** @jsx jsx */
// import {motion} from 'framer-motion'
import {Link} from 'gatsby'
import {Box, jsx} from 'theme-ui'

export const Title = ({title, category, link}) => {
  return (
    <Box>
      <Link to={link} sx={{variant: 'links.product'}}>
        {title}
      </Link>
      <Box sx={{color: 'textMuted'}}>{category}</Box>
    </Box>
  )
}
