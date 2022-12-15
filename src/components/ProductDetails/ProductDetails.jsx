import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "../../adapters/axios";
import gallery1 from "../../assets/images/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery-4.jpg";


function ProductDetails() {
  const { id } = useParams();
  const [products, setProducts] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`products/getFeaturedProducts/${id}`);
        setProducts(result.data);
      } catch (error) {
        console.error(`Error : ${error.response.data}`);
      }
    })();
  }, []);

  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img
            src={products ? products.image : "image"}
            width="100%"
            id="ProductImg"
          />

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
          <p>{products ? products.category : "category"} </p>
          <h2>{products ? products.name : "name"} </h2>
          <h4>₹ {products ? products.price : "price"} </h4>

          <div className="select-size">
            <div className="size-arrange">
              <div>XS</div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <input type="number" defaultValue='1' />
          <button className="btn">ADD TO BAG</button>
          <h3>
            Product details <i className="bx bx-right-indent"></i>
          </h3>
          <br />
          <p> {products && products.productDetails}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
