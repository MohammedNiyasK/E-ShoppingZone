import React from 'react'
import './Brands.css'
import godrej from '../../assets/images/logo-godrej.png'
import coca from '../../assets/images/logo-coca-cola.png'
import oppo from '../../assets/images/logo-oppo.png'
import paypal from '../../assets/images/logo-paypal.png'
import philips from '../../assets/images/logo-philips.png'

function Brands() {
  return (
    <div className="brands">
        <div className="small-container">
            <div className="row">
                <div className="col-5">
                    <img src={godrej} alt="" />
                </div>
                <div className="col-5">
                    <img src={coca} alt="" />
                </div>
                <div className="col-5">
                    <img src={oppo} alt="" />
                </div>
                <div className="col-5">
                    <img src={paypal} alt="" />
                </div>
                <div className="col-5">
                    <img src={philips} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Brands