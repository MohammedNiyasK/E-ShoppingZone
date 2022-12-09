import React from "react";
import "./Signup.css";
import image1 from "../../assets/images/image1.png";
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className="form-account">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={image1} alt="image" />
          </div>

          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <div>Register</div>
              </div>

              <form id="reg-form">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button className="btn">Register</button>
                <Link to="/login">
                <div className="form-btn">Login</div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
