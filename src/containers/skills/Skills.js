import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom opposite duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            <p style={{fontSize: "40px"}}>Crafting captivating digital experiences as a frontend developer.</p>
            <p style={{color: "#E3405F", marginTop: "20px"}}>Here's what I do</p>
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
