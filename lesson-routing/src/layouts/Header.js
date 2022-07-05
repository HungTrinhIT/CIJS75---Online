import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <h3>Logo</h3>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

// html5: header, footer, section, main
// SEO: Search Engine Optimization
// SEO: Seo inside: good HTML structure, img has to alt , SEO outside:m ads, blacklinks,...
// <img src="https://img.jpg" alt="My image"/>
// .... HTML => notes
