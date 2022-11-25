import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  <header>
    <h1 className="title">Crypto Currencies</h1>
    <div>
      <ul className="ul-nav">
        <li className="li-home">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="li-details">
          <NavLink to="/details">
            Details
          </NavLink>
        </li>
      </ul>
    </div>
  </header>;
};

export default Navbar;
