import React from "react";
import "../Styles/MyProfile.css";
import { Link } from "react-router-dom";
const MyProfile = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="profile">
      <div className="title-profile">
        <p>Account</p>
        <h2>My profile</h2>
      </div>

      <div className="summary-profile">
        <h3>Cart Summary</h3>
        <p>
          <strong>Products:</strong> {cart.length}
        </p>
        <p>
          <strong>Cart value:</strong> ${totalPrice.toFixed(2)}
        </p>
        <Link to="/MyCart">View cart</Link>
      </div>

      <div>
        <h2>Selected Product</h2>
        {cart.map((item) => (
          <div className="selected-product">
            <div>
              <h3>{item.name}</h3>
            </div>
            <div>
              <h3>${item.price.toFixed(2)}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
