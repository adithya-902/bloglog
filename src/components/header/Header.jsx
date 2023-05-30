import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="title">
        <div className="header">
          <span className="braces">
            {"{"}..{"}"}
          </span>
          dev.logs
        </div>
      </div>
    </>
  );
};

export default Header;
