import React from 'react';
import './Footer.css'; // You can create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Satisfy your cravings with our lightning-fast food delivery
              service, bringing your favorite flavors right to your doorstep.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              <p>Mumbai, India</p>
              <p>shauryan23singh@gmail.com</p>
              <p>Phone: +91 xxxxxxxxxx</p>
            </address>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
              <a href="#">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/twitter.png"
                  alt="twitter"
                />
              </a>
              <a href="#">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="#">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shauryan Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
