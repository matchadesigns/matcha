/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
// import React from 'react'
// import {Link} from 'gatsby'

export const Tags = ({tags}) => {
  return (
    <Box mt={2}>
      {tags.map(tag => (
        <span key={tag}>#{tag} </span>
      ))}
    </Box>
  )
}
