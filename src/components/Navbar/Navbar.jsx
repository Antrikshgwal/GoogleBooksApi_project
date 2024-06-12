import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <h1 className="heading tag_name">TopBooks Reviews</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <hr className="styledline" />
      <div className={`navitems ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact me</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
      <hr className="styledline" />
    </>
  );
};

export default Navbar;
