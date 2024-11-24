
import React from 'react'

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('about')}>About</button></li>
        <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
        <li><button onClick={() => setCurrentPage('wishlist')}>Wishlist</button></li>
      </ul>
    </nav>
  );
};

export default NavBar; 
