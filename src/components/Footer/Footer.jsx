import React from 'react'
import './Footer.css'
import playStore from '../../assets/images/play-store.png'
import appleStore from '../../assets/images/app-store.png'
import whiteLogo from '../../assets/images/logo-white.png'

function Footer() {
    const date = new Date().getFullYear()
  return (
    <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and ios devices</p>
                <div className="app-logo">
                    <img src={playStore} alt="" />
                    <img src={appleStore} alt="" />
                </div>
            </div>
            <div className="footer-col-2">
                 <a href="index.html"><img src={whiteLogo} /></a>
                
                <p>Our Purpose Is to sustainably make the pleasure and 
                    Benefits of sports Accessible to the many.</p>
            </div>
            <div className="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affilate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">Copyright {date}-RedStore</p>
    </div>
</div>              
  )
}

export default Footer