import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import ShopProduct from "./Pages/ShopProduct";
import MyCart from "./Pages/MyCart";
import MyProfile from "./Pages/MyProfile";
import Contact from "./Pages/Contact";
// create fuction addToCart to add product to cart and pass it as props to ShopProduct component
const App = () => {
  const [Cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...Cart, product]);
  };
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="flex">
          <SideBar />
          <div className="contant">
            <Routes>
              <Route
                path="ShopProduct"
                element={<ShopProduct addToCart={addToCart} />}
              />
              <Route
                path="MyCart"
                element={<MyCart cart={Cart} setCart={setCart} />}
              />
              <Route path="MyProfile" element={<MyProfile />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
