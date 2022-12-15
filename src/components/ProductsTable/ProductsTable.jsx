import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import axios from "../../adapters/axios";


function ProductsTable() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/products/getFeaturedProducts");
      setFeaturedProducts(response.data);
    })();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        {featuredProducts &&
          featuredProducts.map((val, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td>{key + 1} </td>
                  <td>{val.name} </td>
                  <td>{val.category}</td>
                  <td>₹{val.price}</td>
                  <td>
                    <img height="100" src={val.image} width="100" />
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default ProductsTable;
