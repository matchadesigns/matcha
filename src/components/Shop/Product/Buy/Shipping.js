/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

export const Shipping = () => (
  <Text sx={{fontSize: 1, mt: 2}}>
    <span sx={{color: 'red'}}>
      <strong>Livraison offerte à partir de 100€</strong>
    </span>, en 1 semaine chez vous
  </Text>
)
