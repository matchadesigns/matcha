/** @jsx jsx */
import {jsx, Styled, Box} from 'theme-ui'
import {Fragment} from 'react'
import {Link} from 'gatsby'

export const Title = ({title, category}) => {
  return (
    <Fragment>
      <Styled.h1>{title}</Styled.h1>
      <Box sx={{lineHeight: 2}}>
        Catégorie :{' '}
        <h2 sx={{display: 'inline-block', fontSize: 1, m: 0}}>
          <Link sx={{p: 1, bg: 'light', borderRadius: 8}} to={category.link}>
            {category.title}
          </Link>
        </h2>{' '}
      </Box>
    </Fragment>
  )
}
