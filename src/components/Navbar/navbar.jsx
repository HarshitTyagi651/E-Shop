import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import close from '../Assets/Images/close.png';
import logo from '../Assets/Images/logo.png';
import open from '../Assets/Images/menu.png';
import trolley from '../Assets/Images/trolley.png';
import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/closed
  const toggleBtnImg = isOpen ? close : open; // Button text based on state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
        
      <div className="nav-container">
        <div className="logo">
          <img src={logo} />
          <p>SHOPPERS</p>
        </div>
        {/* Menu with conditional visibility and class */}
          <ul className={  isOpen ? "menu-open" : "menu-hidden"}>
            <li onClick={() => {setMenu("shop"); setIsOpen(false)}} className='item'><Link to="/" >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("men"); setIsOpen(false)}} className='item'><Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("women"); setIsOpen(false)}} className='item'><Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids"); setIsOpen(false)}} className='item'><Link to="/kids">Kids</Link>
            {menu==="kids"?<hr/>:<></>}</li>
          </ul>
        <div className="login-cart">
          <Link to="/cart"><img src={trolley} /></Link>
          <Link to="/login"><button id='login' >Login</button></Link>
        </div>
        {/* Button to toggle dropdown (visible only on small screens) */}
        <button className="dropdown-toggle" onClick={toggleDropdown}><img className='toggleBtnImg' src={toggleBtnImg} /></button>
      </div>
    </div>
  )
}

export default Navbar;
