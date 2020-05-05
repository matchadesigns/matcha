/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {jsx} from 'theme-ui'

export const Title = ({title, subtitle, category}) => {
  return (
    <Fragment>
      <Link to={category.link}>
        <h4 sx={{color: 'textMuted'}}>{category.title}</h4>
      </Link>
      <h2 sx={{fontSize: [7, 8, 6, 8]}}>{title}</h2>
      <h3>{subtitle}</h3>
    </Fragment>
  )
}
