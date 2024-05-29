import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

import React from 'react'

function AboutContent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Web developer making responsive secure websites</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
      
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={img3} 
                className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
                <img src={img2} 
                className="img" alt="true" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;
