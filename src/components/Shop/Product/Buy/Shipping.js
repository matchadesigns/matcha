/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const Shipping = ({deliveryTime}) => (
  <Text sx={{fontSize: 1, mt: 2}}>
    <span sx={{color: 'red'}}>
      <strong>
        Livraison offerte à partir de 100€
        <br />
        {deliveryTime
          ? capitalizeFirstLetter(deliveryTime)
          : 'En 1 semaine chez vous'}
      </strong>
    </span>
  </Text>
)
