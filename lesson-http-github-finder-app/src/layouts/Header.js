import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <p>Github Finder</p>
        </Link>
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
