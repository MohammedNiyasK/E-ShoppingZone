import React from "react";
import "./Login.css";
import image1 from '../../assets/images/image1.png'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="form-account">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src={image1} alt="" />
          </div>

          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
             
                <div>Login</div>
                
              </div>
              

              <form id="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="password" />
                <button className="btn">Login</button>
                <Link to ="/signup" >
                <div className="form-btn" >SignUp</div>
                </Link>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
