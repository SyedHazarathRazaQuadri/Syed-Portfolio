import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import HomeExperience from "../experience/HomeExperience";
import HomeEducation from "../education/HomeEducationComponent";
import HomeProjects from "../projects/HomeProjects";
import Footer from "../../components/footer/Footer";
import Contact from "../contact/ContactComponent";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <HomeExperience theme={props.theme} />
      <HomeEducation theme={props.theme}/>
      <HomeProjects theme={props.theme}/>
      <Contact theme={props.theme}/>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
