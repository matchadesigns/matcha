/** @jsx jsx */
import {jsx, Button} from 'theme-ui'
import {IoIosCart} from 'react-icons/io'

export const AddToCart = ({id, title, price, url, description, image, discrete = false, ...props}) => {
  return (
    <Button
      className='snipcart-add-item'
      data-item-id={id}
      data-item-name={title}
      data-item-price={price}
      data-item-url={url}
      data-item-description={description}
      data-item-image={image}
      variant={discrete ? 'discrete' : 'primary'}
      {...props}
    >
      {!discrete && <IoIosCart sx={{mr: 1}} />}
      {discrete ? 'Acheter' : 'Ajouter au panier'}
    </Button>
  )
}
