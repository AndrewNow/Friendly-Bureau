import React from 'react'
import { Link } from 'gatsby'
import '../layouts/style.css'
import { GridWrapper, } from '../components/ProductGrid/styles.js'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

function getImage() {
  let randomImages = [
    '/images/misu.jpg',
    '/images/misu2.jpg'
  ];
  let rand = Math.floor(Math.random() * (randomImages.length))
  return (
    <img src={randomImages[rand]} alt="misu header photo"></img>
  );
}
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Montreal clothing brand, friendlybureau, toronto clothing brand, local screenprint, friendly bureau store, friendlybureau store, montreal graphic design, react`]} />
    <div className="homeflexwrapper" >
      <div className="misubackground">
        {getImage()}
      </div>
      <ProductGrid />
    </div>
    {/* <div class="heythere">
  <h1>Hey there 👋</h1>
  <p>Welcome to Friendly bureau.</p>
</div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)
export default IndexPage