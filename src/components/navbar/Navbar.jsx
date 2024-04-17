import React, { Component } from "react";
import "./navbar.css";

export default class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">fayGo</h1>

        <div className="menu_icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/" className="nav-links">
              <i className="fa-solid fa-house-user"></i>Home
            </a>
          </li>

          <li>
            <a href="/about" className="nav-links">
              <i className="fa-solid fa-circle-info"></i>About
            </a>
          </li>

          <li>
            <a href="/service" className="nav-links">
              <i className="fa-solid fa-briefcase"></i>Flight
            </a>
          </li>

          <li>
            <a href="/contact" className="nav-links">
              <i className="fa-solid fa-address-book"></i>Contact
            </a>
          </li>

          <button className="nav-links">Sign up</button>
        </ul>
      </nav>
    );
  }
}
