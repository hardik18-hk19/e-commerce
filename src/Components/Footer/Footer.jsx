import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

// Footer component to display the website logo, navigation links, social media icons, and copyright information.

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="/" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Conatct</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footericons-container">
          <img src={instagram_icon} alt="/" />
        </div>
        <div className="footericons-container">
          <img src={pintester_icon} alt="/" />
        </div>
        <div className="footericons-container">
          <img src={whatsapp_icon} alt="/" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
