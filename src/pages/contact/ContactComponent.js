import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;

export default function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia page="contact" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
