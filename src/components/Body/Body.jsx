import React from 'react'
import './Body.css'
import image1 from '../../assets/images/image1.png'

function Body() {
  return (
    <div className="row">
                <div className="col-1">
                    <h4>Trade-in-offer</h4>
                    <h2>Super value Deals</h2>
                    <h1>On all Products</h1>
                    <p>save more with coupons & upto 70% off</p>
                    <a href=""><button>Shop Now</button></a>

                </div>
                <div className="col-2">
                    <img src={image1} alt="" />
                </div>
            </div>
       
  )
}

export default Body