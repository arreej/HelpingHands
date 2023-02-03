import React from "react";
import { NavLink } from "react-router-dom";

import "/Users/apple/Documents/HelpingHands/helpinghands/src/NavBar/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav id="nav">
        <span id="nav-title">
          <NavLink to="/welcome" className="nav-link">
            <img
              src={require("../landing/images/sap-logo-color-final.png")}
              alt="logo for save a plate"
              id="logo"
            />
          </NavLink>
        </span>

        <div id="nav-links">
          <NavLink
            to="/aboutus"
            className="nav-link"
            activeClassName="nav-link--active">
            About Us
          </NavLink>
          <NavLink
            to="/resources"
            className="nav-link"
            activeClassName="nav-link--active">
            Resources
          </NavLink>
          <NavLink
            to="/user/signup"
            className="nav-link"
            activeClassName="nav-link--active">
            Get Started
          </NavLink>
          <NavLink
            to="/user/login"
            className="nav-link"
            activeClassName="nav-link--active">
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
