import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "../layouts/style.css";
import { GridWrapper } from "../components/ProductGrid/styles.js";
import SEO from "~/components/seo";
import ProductGrid from "~/components/ProductGrid";
import misu from '../images/misu.jpg'
import annoying from '../images/annoying.jpg'
import drinking from '../images/drinking.jpg'
import eating from '../images/eating.jpg'
import greeting from '../images/greeting.jpg'
import sleeping from '../images/sleeping.jpg'
import talking from '../images/talking.jpg'


const IndexPage = () => {
  const arrayOfImages = [
    annoying,
    drinking,
    eating,
    greeting,
    sleeping, 
    talking
  ];

  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
  
    let num = Math.floor(Math.random() * (arrayOfImages.length - 0)) + 0;
    setCurrentImage(num);
  }, []);
  // pass empty array to useEffect and it will fire ONCE when the component mounts
  
  return (
    <>
      <SEO
        title="Friendly Bureau Home"
        keywords={[
          "Montreal clothing brand",
          "Friendly bureau montreal",
          "friendly bureau",
          "friendly bureau toronto",
          "toronto clothing brand",
          "local screenprint",
          "friendly bureau store",
          "friendlybureau store",
          "montreal graphic design",
          "leah wei friendly bureau",
        ]}
      />
      <div className="homeflexwrapper">
        <div className="misubackground">
          {typeof currentImage == "number" && (
            <img src={arrayOfImages[currentImage]} />
          )}
        </div>
        <ProductGrid />
      </div>
    </>
  );
};
export default IndexPage;