/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

export const Shipping = () => (
  <Text sx={{fontSize: 1, mt: 2}}>
    <span sx={{color: 'red'}}>
      <strong>Livraison offerte jusqu'au 8 juin</strong>
    </span>
    {/* à partir de 100€ */}, en 1 semaine chez vous
  </Text>
)
