import React from 'react'
import './Offer.css'
import exclusive from '../../assets/images/exclusive.png'

function Offer() {
  return (
    <>
         <div className="small-container offer">
            <div className="row">
                <div className="col-2 offer-padding">
                    <img src={exclusive} alt="" className="offer-img" />
                </div>
                <div className="col-2">
                    <p>Exclusively Available on RedStore</p>
                    <h1 className="band">Smart Band 4</h1>
                    <small>
                        Everything on one screen.
                        Approximately 20% further increase in display area*
                        makes incoming calls,
                        messages and alerts easier to see and ushers in a
                        new era of unlimited watch faces.
                    </small>
                    <br />
                    <button className="btn"><a href=""></a>Buy Now</button>
                </div>
            </div>

        </div>
    </>
       
  )
}

export default Offer