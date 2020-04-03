import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navBar.css";

const Navigation = () => {
  return (
    <nav>
      <div className="Header">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <h1>Shelfie</h1>
        <ul id="nav-mobile" className="header_link_box">
          <li>
            <Link to="/" className="link">
              <p className="header_link_box_button">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/add" className="link">
              <p className="header_link_box_button">Add Inventory</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
