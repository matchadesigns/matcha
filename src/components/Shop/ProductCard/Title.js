/** @jsx jsx */
import {jsx, Text} from 'theme-ui'
import {Fragment} from 'react'
// import {motion} from 'framer-motion'
import {Link} from 'gatsby'

export const Title = ({title, category, link}) => {
  return (
    <Fragment>
      <Link to={link} sx={{variant: 'links.product'}}>
        {title}
      </Link>
      <Text sx={{color: 'textMuted'}}>{category}</Text>
    </Fragment>
  )
}
