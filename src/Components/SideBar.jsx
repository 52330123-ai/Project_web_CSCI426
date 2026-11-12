import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/SideBar.css";
import {
 faCartShopping,
 faBagShopping,
  faCircleUser,
faAddressCard
} from '@fortawesome/free-solid-svg-icons';
const SideBar = () => {
  return (
    <div className="side">
      <h2>MENU</h2>
      <ul>
        <li>
          <Link to="/ShopProduct">
            <FontAwesomeIcon icon={faBagShopping} className="icon" />
            <span> Shop Product</span>
          </Link>
        </li>
        <li>
          <Link to="/MyCart">
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <span>My Cart</span></Link>
        </li>
        <li>
          <Link to="/MyProfile"> 
             <FontAwesomeIcon icon={faCircleUser} className="icon" />
          <span>My Profile</span></Link>
        </li>
        <li>
          <Link to="/Contact">
           <FontAwesomeIcon icon={faAddressCard} className="icon" />
          <span>Contact</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
