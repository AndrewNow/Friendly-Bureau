import React from 'react'
import { Link } from 'gatsby'
import misu from '../images/misu.jpg'
import '../layouts/style.css'
import { GridWrapper, } from '../components/ProductGrid/styles.js'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Montreal clothing brand`, `friendlybureau`, `toronto clothing brand`, `local screenprint`, `friendly bureau store`, `friendlybureau store`, `montreal graphic design`, `react`]} />

    <div className="homeflexwrapper">
      <div className="misubackground">
        <img src={require('../images/misu.jpg')} />
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
