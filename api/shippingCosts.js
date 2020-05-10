module.exports = (req, res) => {
  if (!(req && req.body && req.body.content && req.body.content.items)) {
    res.status(200).json({
      errors: [
        {
          key: 'invalid_content',
          message: 'The cart is invalid'
        }
      ]
    })
    return false
  }
  const totalPrice =
    req.body.content.items.length > 0
      ? req.body.content.items.map(({totalPrice}) => totalPrice).reduce((pv, cv) => pv + cv, 0)
      : 0
  let shippingCosts = 0
  if (totalPrice > 0 && totalPrice <= 10) {
    shippingCosts = 1.5
  } else if (totalPrice > 10 && totalPrice < 100) {
    shippingCosts = 6.95
  } else if (totalPrice >= 100) {
    shippingCosts = 0
  }
  res.status(200).json({
    body: {
      rates: [
        {
          cost: shippingCosts,
          description:
            'Frais de ports (1,5€ pour une commande <= à 10€, 6,95€ pour une commande de 10 à 100€, et gratuit pour les commandes de plus de 100€.'
        }
      ]
    }
  })
}
