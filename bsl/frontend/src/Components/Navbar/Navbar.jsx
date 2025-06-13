import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (click) {
      navigate('/login');
      setIsLoggedIn(true);
    }
    else {
      navigate('/');
      setIsLoggedIn(false);
    }
  }, [click]);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="search-box" style={{ width: '500px' }}>
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
        <li><a href="/carrers">Carrers</a></li>
        <li><a href="/explore">Explore</a></li>
      </ul>
      <div className="nav-login-cart">
        <FiShoppingCart />
        <button onClick={() => setClick(!click)}>{isLoggedIn ? 'Logout' : click ? 'Back' : 'Login'}</button>
      </div>
    </div>
  )
}

export default Navbar