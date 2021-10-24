import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar z-0 fixed">
      <h1>
        <a href="/">
          <i className="fas fa-code"></i> DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          |
          <Link to="/dashboard" title="Dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
