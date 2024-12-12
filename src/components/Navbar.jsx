// built this at the beginning before realizing the course was going to call this the Header component. Copied this over to Header for the sake of continuity with course work.

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
