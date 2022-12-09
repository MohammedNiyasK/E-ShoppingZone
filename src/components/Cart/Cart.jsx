import React from "react";
import buy1 from "../../assets/images/buy-1.jpg";
import './Cart.css'

function Cart() {
  return (
    <div className="small-container">
      <div className="cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>

          <tr>
            <td>
              <div className="cart-info">
                <img src={buy1} alt="" />
                <div>
                  <p>Red Printed Tshirt</p>
                  <small>Price:₹500</small>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>
            <td>
              <input type="number"  />
            </td>
            <td>₹500</td>
          </tr>
        </table>
      </div>

      <div className="total-price">
        <table>
          <tr>
            <td>Tax</td>
            <td>₹50</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>₹550</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cart;
