import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" />
        </Link>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products, brands, and more..."
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Right Section - Links */}
      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </Link>
        <Link to="/offers">Offers</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
