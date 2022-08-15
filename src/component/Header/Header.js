import React from "react";
import logoImage from "../../images/user.jpg";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
