/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link as GatsbyLink} from 'gatsby'
// import {motion} from 'framer-motion'

export const Variants = ({variants}) => {
  return variants ? (
    <div sx={{mt: 3}}>
      {variants.map(({option, items}) => (
        <p key={option}>
          {option} :{' '}
          {items
            .map(item => (
              <Link key={item.path} to={item.path} active={item.isActive}>
                {item.title}
              </Link>
            ))
            .reduce((acc, el) => {
              return acc === null ? [el] : [...acc, el]
            }, null)}
        </p>
      ))}
    </div>
  ) : null
}

const Link = ({active, children, ...props}) => (
  <GatsbyLink
    {...props}
    activeClassName='variantActive'
    sx={{
      px: 2,
      mr: 2,
      mb: 2,
      bg: active ? 'black' : 'white',
      color: active ? 'white' : 'black',
      border: '1px solid black',
      display: 'inline-block',
      ':hover': {
        textDecoration: 'none'
      },
      '&.variantActive': {
        ':hover': {
          color: 'gray.2'
        }
      }
    }}
  >
    {children}
  </GatsbyLink>
)
