import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// stylesheet
import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="title-container">
      <h2 className="nav-title">Math Magicians</h2>
    </div>
    <div className="menu-container">
      <nav>
        <ul className="menu-list">
          <li className="list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="list-item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  </div>
);

export default Navbar;
