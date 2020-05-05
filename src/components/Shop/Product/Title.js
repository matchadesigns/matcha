/** @jsx jsx */
import {jsx, Styled, Box} from 'theme-ui'
import {Fragment} from 'react'
import {Link} from 'gatsby'

export const Title = ({title, category}) => {
  return (
    <Fragment>
      <Box sx={{lineHeight: 2}}>
        Catégorie :{' '}
        <Link sx={{p: 2, bg: 'light', borderRadius: 8}} to={category.link}>
          <h2 sx={{display: 'inline-block', fontSize: 3, lineHeight: 1, m: 0}}>{category.title}</h2>
        </Link>
      </Box>
      <Styled.h1 sx={{m: 0}}>{title}</Styled.h1>
    </Fragment>
  )
}
