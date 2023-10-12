import React from "react";
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href={`/#/`} className="nav-link">
        Home
      </a>
      <a href={`/#/project`} className="nav-link">
        Project
      </a>
    </div>
  );
}

export default Navbar;
