import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import bitcoinnn from '../img/bitcoin.png';
import casa from '../img/casa.png';
import carro from '../img/carro.png';

const NavBar = () => (
  <div className="nav-container">
    <div className="sub-container">
      <div className="container-bitcoin">
        <img className="bitcoin" src={bitcoinnn} alt="img-bitcoin" />
      </div>
      <div className="container-link">
        <NavLink to="/" className="title">
          Crypto
        </NavLink>
        {/* <NavLink to="/Details" className="title-detalis">
          -
        </NavLink> */}
      </div>
      <div className="container-casa">
        <img className="carro" src={carro} alt="img-casa" />
      </div>
      <div className="container-carro">
        <img className="casa" src={casa} alt="img-casa" />
      </div>
    </div>
  </div>
);
export default NavBar;
