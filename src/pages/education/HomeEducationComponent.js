import React from "react";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import { Fade } from "react-reveal";
import "./EducationComponent.css";

function HomeEducation(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in tech-related activities. And Engaging Computer Subjects in last Year.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
    </div>
  );
}

export default HomeEducation;
