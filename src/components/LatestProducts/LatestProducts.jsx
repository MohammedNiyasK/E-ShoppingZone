import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import product5 from '../../assets/images/product-5.jpg'

function LatestProducts() {
  return (
    <div className="small-container">
      <h2 className="title">Latest Products</h2>
      <div className="row">
        <div className="col-4">
          <img src={product5} alt="" />
          <h4 className="product-name">Us Polo Assn</h4>
          <div className="rating">
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </div>
          <p className="product-price"> ₹ 700</p>
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
