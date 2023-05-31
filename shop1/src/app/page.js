import React from "react";

import { Product, FooterBanner, HeroBanner } from "./components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Beset Selliing Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["products1", "products2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
