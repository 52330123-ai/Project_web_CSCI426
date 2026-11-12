import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Styles/NavBar.css";

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
            <FontAwesomeIcon icon={faCircleUser} className='icon'/>
            <FontAwesomeIcon icon={faCartShopping} className='icon' />

        </div>

    </div>
  )
}

export default NavBar;