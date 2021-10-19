import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="" className="logo">
        CSS Nav
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#work">Developers</a>
        </li>
        <li>
          <a href="#about">Login</a>
        </li>
        <li>
          <a href="#careers">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
