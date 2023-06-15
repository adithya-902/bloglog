import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      //TODO: Add icons for the contacts and add more stuff in-general
      <div className="footer-container">
        <ul className="footer-list">
          <li className="list-items">
            <a href="https://www.linkedin.com/in/adithya-biju-540b3822a/">
              LinkedIn
            </a>
          </li>
          <li className="list-items">
            <a href="https://wa.me/919746157130/?">Whatsapp</a>
          </li>
          <li className="list-items">
            <a href="mailto:adithyabiju902@gmail.com">E-Mail</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
