import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [productDetails, setProductDetails] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, image);
  };

  return (
    <div>
      <div className="centerDiv">
        <form >
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
           
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
          <br />
          <label htmlFor="productDetails">Product details</label>
          <br />
          <textarea
            className="input"
            type="text"
            id="productDetails"
            name="productDetails"
            rows="4"
            cols="50"
         
            onChange={(e) => {
              setProductDetails(e.target.value);
            }}
            value={productDetails}
          />
          <br />
        </form>
        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>
        <form>
          <br />
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
