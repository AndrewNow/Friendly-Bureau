import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import {
  CartWrapper,
  CartTableHead,
  CartTotalsWrapper,
  CheckoutButton,
  CartFlexContainer,
  CartHeadFlexContainer,
  ProductHeader,
  ColorHeader,
  QtyHeader,
  PriceHeader,
} from './LineItem/styles.js'


const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <CartWrapper>
      <h1>Cart</h1>

      {/* <CartFlexContainer>
        <CartHeadFlexContainer>
          <ProductHeader>
            <h2>Product</h2>
          </ProductHeader>
          <ColorHeader>
            <h2>Color</h2>
          </ColorHeader>
          <QtyHeader>
            <h2>Quantity</h2>
          </QtyHeader>
          <PriceHeader>
            <h2>Price</h2>
          </PriceHeader>
        </CartHeadFlexContainer>
          {line_items}
      </CartFlexContainer>
 */}


{/* _______________________ */}




<br />

      



      <CartTableHead>
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Price</th>
      </CartTableHead>
      {line_items}
        <h1>Total</h1>
      <CartTotalsWrapper>
        <tr>
          <p>Subtotal:</p>
          <p>$ {checkout.subtotalPrice}</p>
        </tr>
        {/* <tr>
          <p>Taxes:</p>
          <p>$ {checkout.totalTax}</p>
        </tr> */}
        {/* <tr>
          <p>Shipping:</p>
          <p>$ {checkout.shipping} </p>
        </tr> */}
        <tr>
          <p>Total:</p>
          <p>$ {checkout.totalPrice}</p>
        </tr>
        <tr>
          <p>Shipping and taxes will be calculated at checkout!</p>
        </tr>

      </CartTotalsWrapper>
        <br />
        <CheckoutButton onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Proceed to checkout</CheckoutButton>
    </CartWrapper>
  )
}
export default Cart
