import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faCartShopping,
faAddressCard,
faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>A STORE</h3>
        <p>Style, performance, and everyday essentials for modern living.</p>
      </div>

      <div>
         <Link to="/ShopProduct"><FontAwesomeIcon icon={faCartShopping} className='icon'/></Link>
          <Link to="/AboutUs"><FontAwesomeIcon icon={faCircleInfo} className='icon' /></Link>
          <Link to="/Contact"><FontAwesomeIcon icon={faAddressCard} className='icon' /></Link>
      </div>
    </div>
  );
};

export default Footer;
