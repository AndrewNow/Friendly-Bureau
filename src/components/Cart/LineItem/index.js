import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  CartButton,
  CartTableBody,
  CartTableMobile,
  CartImageRowMobile,
  CartImage
} from './styles'
import { Product } from '../../ProductGrid/styles'
import ProductForm from '../../ProductForm/index.js'
import '../../../layouts/style.css'


const cartImage = {
}

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <CartImage
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}>
    </CartImage>
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        // option => `${option.name}: ${option.value} `  
        option => `${option.value} `  
    )
    : null
  console.log(line_item.variant)

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }
  return (
    <Wrapper>
      <CartTableBody>
        <td><CartButton onClick={handleRemove}>X</CartButton></td>
        <td>{variantImage}</td>
        <td>
          <p>{line_item.title} {selectedOptions[1]} {``}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}</p>
        </td>
        {line_item.variant.title === 'Default Title' ? <p> </p> :
          <td><p>{selectedOptions[0]}</p></td>
        }
        <td><p>{line_item.quantity}</p></td>
        {/* <td><button style={buttonStyle} onClick={handleRemove}>x</button></td> */}
        <td><p>{line_item.variant.price}$</p></td>
      </CartTableBody>

      


      
      <CartTableMobile>
        <tr>
            <p>{line_item.title}  {selectedOptions[1]} {``}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}</p>
              <CartButton onClick={handleRemove}>X</CartButton>
        </tr>
        <CartImageRowMobile>
          {variantImage}
        </CartImageRowMobile>
        {line_item.variant.title === 'Default Title' ? null :
          <tr>
            <p>Color:</p>
            <p>{selectedOptions[0]}</p>
          </tr>
        }
        {/* above: render null if the title = default title. else, render <tr/>  */}
        <tr>
          <p>Quantity:</p>
          <p>{line_item.quantity} qty</p>
        </tr>
        <tr>
          <p>Price:</p>
          <p>{line_item.variant.price}$</p>
        </tr>
      </CartTableMobile>


      {/* _______________________OLD CODE BELOW_________________________ */}
      {/* {variantImage}
      <p>
        {line_item.title}
        {``}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      </p>
      <p>{selectedOptions[0]}</p>
      <p>{selectedOptions[1]} </p>
      <p>{line_item.quantity}</p>
      <p>{line_item.variant.price}$</p> */}
      </Wrapper>
  )
}
export default LineItem
