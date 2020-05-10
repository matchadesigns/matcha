const body = {
  eventName: 'shippingrates.fetch',
  mode: 'Live',
  createdOn: '2015-02-21T14:58:02.6738454Z',
  content: {
    token: '22808196-0eff-4a6e-b136-3e4d628b3cf5',
    creationDate: '2015-02-21T14:58:02.6738454Z',
    modificationDate: '2015-02-21T14:58:02.6738454Z',
    status: 'Processed',
    currency: 'USD',
    paymentMethod: 'CreditCard',
    email: 'customer@snipcart.com',
    cardHolderName: 'Nicolas Cage',
    billingAddressName: 'Nicolas Cage',
    billingAddressCompanyName: 'Company name',
    billingAddressAddress1: '888 The street',
    billingAddressAddress2: '',
    billingAddressCity: 'Québec',
    billingAddressCountry: 'CA',
    billingAddressProvince: 'QC',
    billingAddressPostalCode: 'G1G 1G1',
    billingAddressPhone: '(888) 888-8888',
    shippingAddressName: 'Nicolas Cage',
    shippingAddressCompanyName: 'Company name',
    shippingAddressAddress1: '888 The street',
    shippingAddressAddress2: '',
    shippingAddressCity: 'Québec',
    shippingAddressCountry: 'CA',
    shippingAddressProvince: 'QC',
    shippingAddressPostalCode: 'G1G 1G1',
    shippingAddressPhone: '(888) 888-8888',
    shippingAddressSameAsBilling: true,
    finalGrandTotal: 310.0,
    shippingAddressComplete: true,
    creditCardLast4Digits: '4242',
    shippingFees: 10.0,
    shippingMethod: 'Livraison',
    items: [
      {
        uniqueId: 'eb4c9dae-e725-4dad-b7ae-a5e48097c831',
        token: '22808196-0eff-4a6e-b136-3e4d628b3cf5',
        id: '1',
        name: 'Movie',
        price: 300.0,
        originalPrice: 300.0,
        quantity: 1,
        url: 'https://snipcart.com',
        weight: 10.0,
        description: 'Something',
        image: 'http://placecage.com/50/50',
        customFieldsJson: '[]',
        stackable: true,
        maxQuantity: null,
        totalPrice: 300.0,
        totalWeight: 10.0
      }
    ],
    subtotal: 610.0,
    totalWeight: 20.0,
    discounts: [],
    willBePaidLater: false
  }
}

module.exports = async (req, res) => {
  res.status(200).json({body})
}
