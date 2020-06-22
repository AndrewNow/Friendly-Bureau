import React from 'react'

import Cart from '~/components/Cart'
import {
  CartContainer,
  CartTableHeader,
  CartTableItem,
  CartTableOther
} from '~/utils/styles'

const CartPage = () => (
  <CartContainer>
    {/* <CartTableHeader>
      <CartTableItem>
        <h1>Item</h1>
      </CartTableItem>

      <CartTableOther>
        <h2>Color</h2>
      </CartTableOther>

      <CartTableOther>
        <h2>Size</h2>
      </CartTableOther>
  
      <CartTableOther>
        <h2>Quantity</h2>
      </CartTableOther>
      
      <CartTableOther>
        <h2>Price</h2>
      </CartTableOther>
  
    </CartTableHeader> */}
    <Cart />
  </CartContainer>
)

export default CartPage
