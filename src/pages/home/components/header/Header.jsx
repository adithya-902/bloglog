import React from "react";
import "./header.css";
import Tilt from "react-parallax-tilt";

const Header = () => {
  return (
    <>
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={2000}
        glareColor={"rgb(255,0,0)"}
      >
        <div className="header">
          <span className="braces">
            {"{"}..{"}"}
          </span>
          dev.logs
        </div>
      </Tilt>
    </>
  );
};

export default Header;
