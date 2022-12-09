import React from "react";
import './ProductDetails.css'
import gallery1 from '../../assets/images/gallery-1.jpg'
import gallery2 from '../../assets/images/gallery-2.jpg'
import gallery3 from '../../assets/images/gallery-3.jpg'
import gallery4 from '../../assets/images/gallery-4.jpg'

function ProductDetails() {
  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={gallery1} width="100%" id="ProductImg" />

          <div className="small-img-row">
            <div className="small-img-col">
              <img src={gallery1} className="smallImg" />
            </div>
            <div className="small-img-col">
              <img src={gallery2} className="smallImg" />
            </div>
            <div className="small-img-col">
              <img src={gallery3} className="smallImg" />
            </div>
            <div className="small-img-col">
              <img src={gallery4} className="smallImg" />
            </div>
          </div>
        </div>

        <div className="col-2">
          <p>Home / T-shirt</p>
          <h2>Red Printed Tshirt by Puma</h2>
          <h4>₹199</h4>

          <div className="select-size">
            <div className="size-arrange">
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <input type="number" value="1" />
          <button className="btn">ADD TO BAG</button>
          <h3>
            Product details <i className="bx bx-right-indent"></i>
          </h3>
          <br />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum
            quas modi ipsam fugit dolorem officiis facilis quibusdam voluptas
            eos. Neque, totam. Quaerat ad sequi ratione quod! Vitae, modi
            tenetur?
          </p>
        </div>
      </div>
    </div>

   
  );
}

export default ProductDetails;
