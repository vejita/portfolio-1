import React from "react";
import { Link } from "react-router-dom";
import "./scss/Nav.scss";

function Nav() {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    padding: "5px 10px",
    // border: "2px solid black",
  };

  return (
    <div className="nav">
      <div className="nav__container container">
        <div className="nav__logo">
          <img src="" alt="" />
        </div>

        <div className="nav__itemList">
          <div className="nav__item">
            <Link style={linkStyle} to="#">
              Home
            </Link>
          </div>
          <div className="nav__item">
            <Link style={linkStyle} to="#">
              About
            </Link>
          </div>
          <div className="nav__item">
            <Link style={linkStyle} to="#">
              Skill
            </Link>
          </div>
          <div className="nav__item">
            <Link style={linkStyle} to="#">
              Portfolio
            </Link>
          </div>
          <div className="nav__item">
            <Link style={linkStyle} to="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
