import sanityClient from '@sanity/client'
import {VercelRequest, VercelResponse} from '@vercel/node'
import {sanity} from '../client-config'

export default (req: VercelRequest, res: VercelResponse) => {
  if (!(req && req.body && req.body.content && req.body.content.items)) {
    res.status(200).json({
      errors: [
        {
          key: 'invalid_content',
          message: 'The cart is invalid',
        },
      ],
    })
    return false
  }
  const totalPrice =
    req.body.content.items.length > 0
      ? req.body.content.items
          .map(({totalPrice}) => totalPrice)
          .reduce((pv, cv) => pv + cv, 0)
      : 0
  let shippingCosts = 0
  if (totalPrice > 0 && totalPrice <= 10) {
    shippingCosts = 1.5
  } else if (totalPrice > 10 && totalPrice < 100) {
    shippingCosts = 6.95
  } else if (totalPrice >= 100) {
    shippingCosts = 0
  }
  const client = sanityClient({
    projectId: sanity.projectId,
    dataset: sanity.dataset,
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  })

  client.getDocument('siteSettings').then(settings => {
    if (settings.isFreeShipping === true) {
      res.status(200).json({
        rates: [
          {
            cost: 0,
            description: 'Frais de ports offerts !',
          },
        ],
      })
    } else {
      res.status(200).json({
        rates: [
          {
            cost: shippingCosts,
            description:
              'Frais de ports offerts pour les commandes de plus de 100€.',
          },
        ],
      })
    }
  })
}
