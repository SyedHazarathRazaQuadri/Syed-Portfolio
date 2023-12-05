import React from "react";
import { socialMediaLinks } from "../../portfolio";
import MailIconPNG from "../../assets/images/mail.png";
import MailIconGIF from "../../assets/images/mail.gif";
import "./SocialMedia.css";

export default function socialMedia(props) {
  return (
    <div
      className={`${
        props.page === "home" ? "social-media-div" : "contact-social-media-div"
      }`}
    >
      <a
        href="https://wa.me/919666399293"
        className="social-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
      <svg style={{background: "green"}} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      </a>
      <a
        href="https://github.com/SyedHazarathRazaQuadri"
        className="social-icon github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="github-icon"
          width="45px"
          height="45px"
          viewBox="0 0 300 300"
        >
          <path
            id="body"
            d="M112.5,234.4v43.1c24.5,7.5,50.5,7.5,75,0V225c-0.4-11.1-4.9-21.6-12.7-29.6c30-3.4,59.5-23.5,59.5-64.1
            c0.9-13.9-3.3-27.7-11.8-38.7c4.1-11.6,3.7-24.4-1.3-35.7c0,0-11.2-3.7-37.5,13.8c-22.1-6.1-45.3-6.1-67.4,0
            C90.6,53.3,78.9,56.8,78.9,56.8c-5,11.3-5.4,24.1-1.3,35.7c-8.5,11.1-12.7,24.8-11.9,38.7c0.2,33.8,26.4,61.8,60.2,64.1
            c-5,4.7-8.1,11.1-8.6,18"
          />
          <path
            id="arm"
            d="M125.2,213.4c-13.9,7.8-31.5,2.8-39.3-11.2c-4.3-7.7-12-12.8-20.7-13.8c-11.2,0-4.6,6.4,0,9.4
            c6,5.1,10.8,11.5,13.8,18.8c2.9,7.4,7.7,24.1,41.5,17.8"
          />
        </svg>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="social-icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="linkedin-icon feather feather-linkedin"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="social-icon google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={MailIconPNG}
          className="mail-img google-icon"
          alt="mail-icon-png"
        />
        <img
          src={MailIconGIF}
          className="mail-gif google-icon"
          alt="mail-icon-gif"
        />
      </a>
    </div>
  );
}
