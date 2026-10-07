/** @jsx jsx */
import {jsx} from 'theme-ui'

export const PromoBadge = ({sx, ...props}) => (
  <span
    {...props}
    sx={{
      display: 'inline-block',
      bg: 'red',
      color: 'white',
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
      letterSpacing: '2px',
      lineHeight: 1,
      px: 2,
      py: 1,
      borderRadius: 4,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, .1)',
      ...sx
    }}
  >
    PROMO
  </span>
)
