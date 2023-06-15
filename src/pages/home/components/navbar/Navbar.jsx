import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    //TODO : add navigation and scrollability
    <>
      <div className="nav">
        <div className="topleft">
          {"{"}..{"}"}dev.logs
        </div>
        <div className="topcenter">
          <ul className="toplist">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">POSTS</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topright">
          <i className="top SearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
export default Navbar;
