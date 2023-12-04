import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.full_name}
        </p> */}
      </Fade>
    </div>
  );
}
