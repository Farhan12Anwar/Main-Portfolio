import "./FooterStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

import { 
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
     } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>My Location</p>
                    <p>Hyderabad</p>
                </div>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            +91 7095248094</h4>
           
            </div>

            <div className="email">
                <h4>
                     <FaMailBulk 
                     size={20}
                      style={{color:"#fff", marginRight:"2rem"}}
                      />
                      <Link to="/contact">
            anwarfarhan339@gmail.com</Link></h4>
           
            </div>
        </div>

        <div className="right">
            <h4>About Me</h4>
            <p>Pursuing BCA</p>
          <div className="social">
             <a href="https://github.com/Farhan12Anwar" target="_blank" rel="noopener noreferrer">
            <FaGithub
                     size={30}
                      style={{color:"#fff", marginRight:"1rem"}}
                      /></a>
             <a href="https://github.com/Farhan12Anwar" target="_blank" rel="noopener noreferrer">
            <FaInstagram
                     size={30}
                      style={{color:"#fff", marginRight:"1rem"}}
            /></a>
            <a href="https://www.instagram.com/anwarfarhan339/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
            <FaLinkedin 
                     size={30}
                      style={{color:"#fff", marginRight:"1rem"}}
                      /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
