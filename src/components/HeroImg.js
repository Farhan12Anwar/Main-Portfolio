import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

import img4 from "../assets/img4.jpg";
import "./HeroImgStyles.css";

function HeroImg() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["PROGRAMMER", "DESIGNER", "DEVELOPER"],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      onComplete: (self) => {
        self.cursorChar = "";
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  function Color() {
    // Math.random = Math.floor * 2;
    let color = "";
    return color;
  }

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={img4} alt="introImg" />
      </div>
      <div className="content">
        <p>HI, I am a Student</p>
        <h1>
          AND A <span className="auto-type" />
        </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          {/* <Link to="/resume" className="btn" id="guide-link" style={{background:Color()}}>
            Resume
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
