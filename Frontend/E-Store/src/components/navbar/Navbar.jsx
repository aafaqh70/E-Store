import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar(){

    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="row navbar">
    <div className="navbar-container col-8 offset-4">
        {isMenuOpen ? "" :  <a href="#" className="navbar-mobile-link"><img src="/images/cart.png" alt="L" /></a>}
      
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
        <span className="navbar-icon"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><Link to="/product/new">Add Poduct</Link></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">ENG</a></li>
        <li><a href="#"><img src="/images/search.png" alt="L" /></a></li>
        <li><a href="#"><img src="/images/cart.png" alt="L" /></a></li>
      </ul>
    </div>
  </nav>
</>
  )
}

export default Navbar