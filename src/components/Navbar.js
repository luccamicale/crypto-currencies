import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <h1 className="logo">Crypto Currencies</h1>
    <div>
      <ul className="ul-nav">
        <li className="link-item">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink to="/details">
            Details
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);
export default NavBar;
