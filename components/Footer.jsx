import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 NCS Headphones All right reserverd</p>
      <p className="icons">
        <FaInstagramSquare />
        <FaFacebookSquare />
      </p>
    </div>
  );
};

export default Footer;
