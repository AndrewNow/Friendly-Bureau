import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  CartButton,
  CartTableBody,
  CartTableMobile,
  CartImageRowMobile,
  CartImage,
  LineItemFlexContainer,
  ImageHeader,
  ProductHeader,
  PriceHeader,
  ButtonHeader,
  ColorHeader,
  QtyHeader,
  MobileLineItemFlexContainer,
  MobileFlexRow,
  MobileImageRow,
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
      <LineItemFlexContainer>
        <ImageHeader>{variantImage}</ImageHeader>

        <ProductHeader>
          <p>
            {line_item.title} {selectedOptions[1]} {``}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}
          </p>
        </ProductHeader>

        {line_item.variant.title === 'Default Title' ? (
          <ColorHeader />
        ) : (
          <ColorHeader>
            <p>{selectedOptions[0]}</p>
          </ColorHeader>
        )}

        <QtyHeader>
          <p>{line_item.quantity}</p>
        </QtyHeader>

        <PriceHeader>
          <p>{line_item.variant.price}$</p>
        </PriceHeader>

        <ButtonHeader>
          <CartButton onClick={handleRemove}>X</CartButton>
        </ButtonHeader>
      </LineItemFlexContainer>

      {/*<CartTableBody>
        <td>
          <CartButton onClick={handleRemove}>X</CartButton>
        </td>
        <td>{variantImage}</td>
        <td>
          <p>
            {line_item.title} {selectedOptions[1]} {``}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}
          </p>
        </td>
        {line_item.variant.title === 'Default Title' ? (
          <p> </p>
        ) : (
          <td>
            <p>{selectedOptions[0]}</p>
          </td>
        )}
        <td>
          <p>{line_item.quantity}</p>
        </td>
        {/* <td><button style={buttonStyle} onClick={handleRemove}>x</button></td> */}
      {/* <td>
          <p>{line_item.variant.price}$</p>
        </td>
        </CartTableBody> */}

      <MobileLineItemFlexContainer>
        <MobileFlexRow>
          <div>
            <p>
              {line_item.title} {selectedOptions[1]} {``}
              {line_item.variant.title === !'Default Title'
                ? line_item.variant.title
                : ''}
            </p>
          </div>
          <div>
            <CartButton onClick={handleRemove}>X</CartButton>
          </div>
        </MobileFlexRow>

        <MobileImageRow>{variantImage}
        </MobileImageRow>

        {line_item.variant.title === 'Default Title' ? null : (
          <MobileFlexRow>
            <div>
              <p>Color:</p>
            </div>
            <div>
              <p>{selectedOptions[0]}</p>
            </div>
          </MobileFlexRow>
        )}

        <MobileFlexRow>
          <div>
            <p>Quantity:</p>
          </div>
          <div>
            <p>{line_item.quantity} qty</p>
          </div>
        </MobileFlexRow>

        <MobileFlexRow>
          <div>
            <p>Price:</p>
          </div>
          <div>
            <p>{line_item.variant.price}$</p>
          </div>
        </MobileFlexRow>
      </MobileLineItemFlexContainer>

      {/* <CartTableMobile>
        <tr>
          <p>
            {line_item.title} {selectedOptions[1]} {``}
            {line_item.variant.title === !'Default Title'
              ? line_item.variant.title
              : ''}
          </p>
          <CartButton onClick={handleRemove}>X</CartButton>
        </tr>
        <CartImageRowMobile>{variantImage}</CartImageRowMobile>
        {line_item.variant.title === 'Default Title' ? null : (
          <tr>
            <p>Color:</p>
            <p>{selectedOptions[0]}</p>
          </tr>
        )}
        above: render null if the title = default title. else, render a <tr/>
        <tr>
          <p>Quantity:</p>
          <p>{line_item.quantity} qty</p>
        </tr>
        <tr>
          <p>Price:</p>
          <p>{line_item.variant.price}$</p>
        </tr>
      </CartTableMobile> */}
    </Wrapper>
  )
}
export default LineItem
