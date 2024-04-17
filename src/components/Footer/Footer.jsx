import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-sec">
          <div className="first-sec">
            <h2>Jobs in Japan</h2>
            <p>Jobs in Japan</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div className="middle-sec">
            <h2>Legal</h2>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Commercial Act</p>
          </div>
          <div className="final-sec">
            <h2>Contact us</h2>
            <h3>Tokyo Office</h3>
            <p>C/O Global Village Media</p>
            <p>1-7-20-B2 Yaesu, Chuo-ku,</p>
            <p>Tokyo</p>
          </div>
              </div>
              <p className='footer-bottom'>2024 Owned and operated by Spectrum Consulting Japan G.K</p>
      </div>
    </div>
  );
}

export default Footer