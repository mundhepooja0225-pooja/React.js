import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h4>Shop<span style={{ color: 'blue' }}>Kart</span></h4>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;