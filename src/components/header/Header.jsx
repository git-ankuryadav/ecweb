import React from "react";
import logo from "../../assets/images/logo3.svg";
import "./header.css";
import imageSrc from "../../assets/ecw-img/3.jpeg";

import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <div className="profile">
              <img className="img" src={imageSrc} alt="Club img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
