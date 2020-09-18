import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav-Links">
        <Link to="/">
          <li className="navbar-brand">Home</li>
        </Link>
        <Link to="/workouts">
          <li className="navbar-brand">Workouts</li>
        </Link>
        <Link to="/recipes">
          <li className="navbar-brand">Recipes</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
