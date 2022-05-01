import React from "react";
import "../App.css";
import copyright from "../Images/copyright.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="link-blocks">
        <div className="block-one">
          <h3>Products</h3>
          <a href="">Bitcoin</a>
          <a href="">Alt</a>
          <a href="">Fiat</a>
          <a href="">Refill</a>
          <a href="">P2P</a>
        </div>

        <div className="block-one">
          <h3>Learn</h3>
          <a href="">Blog</a>
          <a href="">Help Center</a>
        </div>

        <div className="block-one">
          <h3>Contact</h3>
          <a href="">hello@tradexpress.com</a>
          <a href="">support@tradeexpress.com</a>
        </div>

        <div className="block-one">
          <h3>Company</h3>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Rates</a>
          <a href="">Mobile</a>
        </div>

        <div className="block-one">
          <h3>Legal</h3>
          <a href="">Privacy Policy</a>
          <a href="">Anti-Money Laundering </a>
          <a href="">erms and Conditions</a>
        </div>
      </div>
      {/* <div className="copyright-box">
        <img src={copyright} alt="" />
      </div> */}
    </div>
  );
};

export default Footer;
