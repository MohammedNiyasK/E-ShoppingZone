import React from "react";
import "./Products.css";
import product1 from '../../assets/images/product-1.jpg'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Products() {
  return (
    <div class="small-container">
      <div class="row row-2">
        <h2>All Products</h2>
        <select name="" id="">
          <option value="">Default Shorting</option>
          <option value="">Short by price</option>
          <option value="">Short by Popularity</option>
          <option value="">Short by rating</option>
          <option value="">Short by sale</option>
        </select>
      </div>

      <div class="row">
        <div class="col-4">
          <img src={product1} alt="" />
          <h4 class="product-name">Red Printed T-shirt</h4>
          <div class="rating">
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </div>
          <p class="product-price"> ₹ 500</p>
        </div>
        
      </div>

      <div class="small-container">
                <div class="pages">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span className="arrow">
                      <ArrowForwardIcon  />
                    </span>
                   
                </div>

            </div>
    </div>
  );
}

export default Products;
