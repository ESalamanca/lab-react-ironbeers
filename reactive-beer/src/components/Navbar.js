import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <nav className="navbar-custom">
      {props.isHome ? (
        <div>Iron Beer</div>
      ) : (
        <Link to="/">
          <img src="/img/home.png" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
