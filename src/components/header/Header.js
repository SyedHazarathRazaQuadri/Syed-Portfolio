import React, { useState } from "react";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import "./Header.css";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(252 16 86 / 76%)",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#fc10568f" : "#646464"
      }`,
    },
  });

  // const link = settings.isSplash ? "splas" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "light" ? (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#FFFFFF" : "#A7A7A7"}
      />
    ) : (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#FFFFFF" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div
        className={`${
          props.theme.name === "light"
            ? "header-container-light"
            : "header-container-dark"
        }`}
      >
        <header className="header">
          <div className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </div>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
