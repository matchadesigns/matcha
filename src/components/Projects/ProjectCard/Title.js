/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {jsx} from 'theme-ui'

export const Title = ({title, subtitle, category, link}) => {
  return (
    <Fragment>
      <h4 sx={{color: 'light', m: 0, lineHeight: 1}}>{category}</h4>
      <Link
        to={link}
        sx={{
          borderBottom: '1px solid transparent',
          ':hover': {textDecoration: 'none', borderColor: 'rgba(0,0,0,0.08)'}
        }}
      >
        <h2 sx={{m: 0, lineHeight: 1}}>{title}</h2>
      </Link>
      <h3 sx={{m: 0, lineHeight: 1}}>{subtitle}</h3>
    </Fragment>
  )
}
