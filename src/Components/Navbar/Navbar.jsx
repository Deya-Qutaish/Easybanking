import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <li>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Contact</ul>
        <ul>Blog</ul>
        <ul>Careers</ul>
      </li>
      <button className="request__button">Request Invite</button>
    </nav>
  );
};

export default Navbar;
