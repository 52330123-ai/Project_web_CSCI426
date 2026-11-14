import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import ShopProduct from "./Pages/ShopProduct";
import MyCart from "./Pages/MyCart";
import MyProfile from "./Pages/MyProfile";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import "./Styles/Responsive.css";
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
                path="/"
                element={<ShopProduct addToCart={addToCart} />}
              />
              <Route
                path="MyCart"
                element={<MyCart cart={Cart} setCart={setCart} />}
              />
              <Route path="MyProfile" element={<MyProfile cart={Cart} setCart={setCart}/>} />
              <Route path="Contact" element={<Contact />} />
              <Route path="AboutUs" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
