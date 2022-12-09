import React from 'react'
import './Testimonial.css'
import user1 from '../../assets/images/user-1.png'
import user2 from '../../assets/images/user-2.png'
import user3 from '../../assets/images/user-3.png'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import exclusive from '../../assets/images/exclusive.png'

function Testimonial() {
  return (
    <div className="testimonial">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <i className='bx bxs-quote-left'></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam soluta labore excepturi natus
                        libero nulla cum modi consequatur harum amet, placeat porro, doloribus ex atque, dolorem sed
                        odit iure.</p>
                    <div className="rating">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />
                    </div>

                    <img src={user1} className="img" />
                    <h3>Racheal Green</h3>
                </div>
                <div className="col-3">
                    <i className='bx bxs-quote-left'></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam soluta labore excepturi natus
                        libero nulla cum modi consequatur harum amet, placeat porro, doloribus ex atque, dolorem sed
                        odit iure.</p>
                    <div className="rating">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />

                    </div>

                    <img src={user2} alt="" />
                    <h3>Chandler Bing</h3>
                </div>
                <div className="col-3">
                    <i className='bx bxs-quote-left'></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam soluta labore excepturi natus
                        libero nulla cum modi consequatur harum amet, placeat porro, doloribus ex atque, dolorem sed
                        odit iure.</p>
                    <div className="rating">
                    <StarBorderIcon />
                    <StarBorderIcon />
                    <StarBorderIcon />

                    </div>

                    <img src={user3} alt="" />
                    <h3>Monica Geller</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial