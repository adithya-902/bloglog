import React from "react";
import "./header.css";
import Tilt from "react-parallax-tilt";

const Header = () => {
  return (
    <>
      <div className="header">
        <span className="braces">
          {"{"}..{"}"}
        </span>
        dev.logs
      </div>
    </>
  );
};

export default Header;
