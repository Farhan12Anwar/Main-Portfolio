import "./WorkCardStyles.css";
import img2 from "../assets/img2.jpeg";
import  { NavLink } from "react-router-dom";

import React from 'react'

function WorkCard(props) {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink
                    target="_blank"
                     to={props.view}
                      className="btn">View</NavLink>

                    <NavLink
                     to={props.view}
                      className="btn">Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default WorkCard;
