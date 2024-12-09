import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav--logo">
        <Link className="nav--title" to="/">
          #VANLIFE
        </Link>
      </div>
      <div className="nav--menu">
        <Link to="/about" className="nav--link">
          About
        </Link>
        <Link to="/vans" className="nav--link">
          Vans
        </Link>
      </div>
    </nav>
  );
}
