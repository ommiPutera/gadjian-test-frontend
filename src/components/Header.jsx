import React from "react";
import defaultUser from "../assets/default-user-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/gadjian-logo.png";
import "./style/header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <FontAwesomeIcon
          icon={faBars}
          className="bars-icon"
          onClick={props.onCliCkBtn}
        />
        <img src={Logo} alt="logo" className="logo-header" />
      </div>

      <div className="header-right">
        <p>
          Hallo, <span className="user-name">Gadjian User</span>
        </p>
        <img src={defaultUser} alt="default-user" width="35px" height="35px" />
      </div>
    </div>
  );
};

export default Header;
