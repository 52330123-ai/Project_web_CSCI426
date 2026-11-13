import React, { useState } from "react";
import "../Styles/MyCart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTrash,
 
} from '@fortawesome/free-solid-svg-icons';
const MyCart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const deleteProduct = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };


  return (
    <div className="my-cart">
       <Link to="/ShopProduct" className="tshop">Shopping Cart</Link>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Start adding products to your bag.</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-products">
            {cart.map((item, index) => (
              <div className="cart-item">
                <img src={item.image} />

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <h3>${item.price.toFixed(2)}</h3>
                  <p></p>
                  <button onClick={() => deleteProduct(index)} className="delete"><FontAwesomeIcon icon={faTrash}/>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <hr />

            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
