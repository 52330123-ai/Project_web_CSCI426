import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Styles/NavBar.css";
import { Link } from 'react-router-dom';

import {
    faCartShopping,
    faCircleUser
 
} from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
    <div className='nav'>

        <div className='title'>
          <h1>A STORE</h1>
        </div>

        <div className='icons'>
          <Link to="/MyProfile"><FontAwesomeIcon icon={faCircleUser} className='icon'/></Link>
          <Link to="/MyCart"><FontAwesomeIcon icon={faCartShopping} className='icon' /></Link>
            

        </div>

    </div>
  )
}

export default NavBar;