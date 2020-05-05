/** @jsx jsx */
import {jsx, Text} from 'theme-ui'
import {Fragment} from 'react'
// import {motion} from 'framer-motion'

export const Stock = ({inStock}) => {
  return <Fragment>{inStock && <Text sx={{color: 'green', display: 'inline-block', mr: 2}}>En stock</Text>}</Fragment>
}
