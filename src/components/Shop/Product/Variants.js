/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
// import {motion} from 'framer-motion'

export const Variants = ({variants}) => {
  return (
    <div sx={{mt: 3}}>
      {variants.map(({option, items}) => (
        <p key={option}>
          {option} :{' '}
          {items
            .map(item =>
              item.isActive ? (
                <Link
                  key={item.path}
                  to={item.path}
                  sx={{p: 1, mr: 1, bg: 'black', color: 'white', border: '1px solid black'}}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  sx={{p: 1, mr: 2, bg: 'white', color: 'black', border: '1px solid black'}}
                >
                  {item.title}
                </Link>
              )
            )
            .reduce((acc, el) => {
              return acc === null ? [el] : [...acc, el]
            }, null)}
        </p>
      ))}
    </div>
  )
}
