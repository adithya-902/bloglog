import React from "react";
import "./about.css";

import me from "../../images/me.png";

const About = () => {
  return (
    <>
      <div className="about-card">
        <div className="photo">
          <img src={me} alt="" />
        </div>
        <p className="bio">
          Hey there, I'm Adithya Biju, born on September 25, 2002, and I am
          thrilled to share my story with you.
          <br />
          <br />
          Ever since I can remember, I've been captivated by the world of
          programming. There's something about the process of creating and
          building software that ignites a fire within me. It's like solving
          puzzles and bringing ideas to life, all through lines of code. I've
          dedicated countless hours to refining my coding skills. I've delved
          into various programming languages and frameworks, constantly
          challenging myself to take on new projects and expand my knowledge.
          The thrill of overcoming coding challenges and seeing my programs come
          to life never ceases to amaze me.
          <br />
          <br />
          As I look ahead, I'm excited about the endless possibilities that lie
          before me. I'm determined to continue pushing boundaries, embracing
          challenges, and making a lasting impact in the world of technology.
          Coding is not just a career for me; it's a way of life, and I can't
          wait to see where this incredible journey takes me next.
        </p>
      </div>
    </>
  );
};

export default About;
