import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import product1 from "../../assets/images/product-1.jpg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import axios from "../../adapters/axios";
import {useNavigate, generatePath} from 'react-router-dom'

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("products/getFeaturedProducts");
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error(`Error : ${error}`);
      }
    })();
  }, []);

  

  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        {featuredProducts &&
          featuredProducts.map((product, key) => {

           return <div className="col-4" key={key}>
              
                <img src={product.image} 
                  onClick={() =>{
                  // console.log(product._id)
                  const id = product._id
                 id && navigate(`productdetails/${id}` )
                  }}
                />
             

              <h4 className="product-name">{product.name} </h4>
              <div className="rating">
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
              <p className="product-price"> {`₹ ${product.price}`} </p>
            </div>;
          })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
