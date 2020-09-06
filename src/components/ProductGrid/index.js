import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
  TitleFlexWrapper
} from './styles'
import { Img } from '~/utils/styles'
import "../../layouts/style.css"

const ProductGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
                availableForSale
              }
            }
          }
        }
      }
    `
  )


  
  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'USD',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => {
          console.log(firstVariant.availableForSale)
          return (
            <Product key={id} >
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile &&
                  (<Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />)}
              </Link>
              {/* this is where the home screen image gets linked to the product */}
              <TitleFlexWrapper>
                <Title>{title}</Title>
                {firstVariant.availableForSale ? <PriceTag>{getPrice(firstVariant.price)}</PriceTag> : <PriceTag>Sold out!</PriceTag> }     
              </TitleFlexWrapper>
            </Product>
          )
        })
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default ProductGrid
