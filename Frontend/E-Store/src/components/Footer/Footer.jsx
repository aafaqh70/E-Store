import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
          <div class="footer-row row justify-content-center">
        <div className="col-8">
          <div className="fotor-row row">
            <div class="fotor col-lg-3 col-md-3">
              <div className="fotorContainer">
                <p className="hading">About</p>
                <p className="about-text">
                  We disintricate preference thoroughly. Let ours zeal push
                  aside your horizon. Pronounce we attention admitting.
                </p>
                <div className="links">
                <span><a href="#"><img src="/images/facebook.png" alt="" /></a></span>
                <span><a href="#"><img src="/images/twitter.png" alt="" /></a></span>
                <span><a href="#"><img src="/images/instagram.png" alt="" /></a></span>
                <span><a href="#"><img src="/images/youtube.png" alt="" /></a></span>
              </div></div>
              <br />
            </div>
            <div class="fotor col-lg-3 col-md-3">
              <div className="fotorContainer">
                <p className="hading">Shoping Online</p>
                <ul>
                  <li>Order Status</li>
                  <li>Shipping & Delivery</li>
                  <li>Returns</li>
                  <li>Payment Options</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <br />
            </div>
            <div class="fotor col-lg-3 col-md-3">
              <div className="fotorContainer">
                <p className="hading">Information</p>
                <ul>
                  <li>Gift Card</li>
                  <li>Find a Store</li>
                  <li>Newsletter</li>
                  <li>Become a member</li>
                  <li>Site feedback</li>
                </ul>
              </div>
              <br />
            </div>
            <div class="fotor col-lg-3 col-md-3">
              <div className="fotorContainer">
                <p className="hading">Contact</p>
                <ul>
                  <li>Email: store@mail.com</li>
                  <li>Phone: +01 123 5679 99</li>
                </ul>
              </div>
              <br />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="footer-copyright">
            <p>&copy; Copyrights All Right Reserved</p>
        </div>
    </>
  )
}

export default Footer