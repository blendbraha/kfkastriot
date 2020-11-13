import React, { useState } from "react";
// import { Button } from './Button';
import { MenuIteams } from "./MenuIteam";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState();

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuIteams.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
