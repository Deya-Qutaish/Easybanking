import React from "react";
import "./Footer.css";
import logo from "../../images/logo-dark.svg";
import MediaArray from "./MediaArray";

const Footer = () => {
  return (
    <footer>
      <div className="footer__images">
        <img src={logo} alt="logo-dark" />
        <div>
          {MediaArray.map((icon, i) => (
            <img src={icon.icon} alt={`icon-${i}`} />
          ))}
        </div>
      </div>
      <div className="footer__text">
        <h5>About us</h5>
        <h5>Contact</h5>
        <h5>Blog</h5>
      </div>
      <div className="footer__text">
        <h5>Careers</h5>
        <h5>Support</h5>
        <h5>Privacy Policy</h5>
      </div>
      <div className="footer__rights">
        <button className="request__button">Request Invite</button>
        <h6>© Easybank. All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
