import React, { useState, useRef } from "react";
import "./Create.css";
import axios from "../../adapters/axios";

function Create() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [image, setImage] = useState("");
  const imageInputRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("category", category);
    data.append("price", price);
    data.append("productDetails", productDetails);
    data.append("image", image);

    try {
      await axios.post("products/featuredProducts", data);
    } catch (error) {
      console.error(`Error detected: ${error.response.data}`);
    }

    imageInputRef.current.value = "";

    setName("");
    setCategory("");
    setPrice("");
    setProductDetails("");
    setImage("");
  };

  return (
    <div>
      <div className="centerDiv">
        <form encType="multipart/form-data">
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
            name="image"
            ref={imageInputRef}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>
            upload and Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
