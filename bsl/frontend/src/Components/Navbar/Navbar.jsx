import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
          </div>
          <div className="search-box">
  <div className="search-icon">
  <IoIosSearch />
  </div>
  <input 
    type="text" 
    placeholder="Search for anything" 
    className="search-input" 
  />
</div>

          <ul className="nav-menu">
            <li>Carrers</li>
            <li>Explore</li>
            </ul>
            <div className="nav-login-cart">
            <FiShoppingCart />
                <button>Login</button>
             </div>
    
    </div>
   
  )
}

export default Navbar
