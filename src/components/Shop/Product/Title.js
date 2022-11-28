/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import {Fragment} from 'react'
import {Link} from 'gatsby'
import {Themed} from '@theme-ui/mdx'

export const Title = ({title, category}) => {
  return (
    <Fragment>
      <Box sx={{lineHeight: 2}}>
        Catégorie :{' '}
        <Link sx={{p: 2, bg: 'light', borderRadius: 8}} to={category.link}>
          <h2 sx={{display: 'inline-block', fontSize: 3, lineHeight: 1, m: 0}}>
            {category.title}
          </h2>
        </Link>
      </Box>
      <Themed.h1 sx={{m: 0, fontSize: [5, 6, 5, 6]}}>{title}</Themed.h1>
    </Fragment>
  )
}
