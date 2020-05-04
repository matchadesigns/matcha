/** @jsx jsx */
import {jsx, Text} from 'theme-ui'
import {Fragment} from 'react'
// import {motion} from 'framer-motion'

export const Price = ({price}) => {
  return (
    <Fragment>
      <Text>{price}</Text>
    </Fragment>
  )
}
