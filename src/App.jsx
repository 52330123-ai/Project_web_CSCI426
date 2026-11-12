import React from 'react'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./App.css";
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import ShopProduct from "./Pages/ShopProduct";
import MyCart from"./Pages/MyCart";
import MyProfile from"./Pages/MyProfile";
import Contact from"./Pages/Contact";
const App = () => {
  return (
    <div className='app'>
      <Router>
        <NavBar />
         <div className='flex'>
             <SideBar />
             <div className='contant'>
                <Routes>
                  <Route path='ShopProduct'  element={< ShopProduct/>} />
                  <Route path='MyCart'  element={< MyCart/>} />
                    <Route path='MyProfile'  element={<MyProfile />} />
                      <Route path='Contact'  element={<Contact />} />
              </Routes>
             </div>
         </div>
      </Router>
    </div>
  )
}

export default App;