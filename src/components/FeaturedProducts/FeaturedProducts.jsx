import React from "react";
import "./FeaturedProducts.css";
import product1 from '../../assets/images/product-1.jpg'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function FeaturedProducts() {
  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        <div className="col-4">
          <a href="productdetails.html">
            <img src={product1} />
          </a>

          <h4 className="product-name">Red Printed T-shirt</h4>
          <div className="rating">
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </div>
          <p className="product-price"> ₹ 500</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
