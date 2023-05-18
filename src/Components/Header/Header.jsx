import React from "react";
import "./Header.css";
import headerImg from "../../images/Frame 3.svg";

const Header = () => {
  return (
    <header>
      <div className="header__text">
        <h1>
          Next generation <br />
          digital banking
        </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
        <button className="request__button">Request Invite</button>
      </div>
      <img src={headerImg} alt="headerImg" />
    </header>
  );
};

export default Header;
