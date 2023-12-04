// Website related settings
const settings = {
  isSplash: true, 
  useCustomCursor: true, 
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Syed Hazarath",
  logo_name: "Syed Hazarath",
  full_name: "Syed Hazarath",
  subTitle1: "Frontend Developer.",
  subTitle2: "Life Long Learner.",
  subTitle: "Frontend Developer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1RpnlEOnjko-wqMdIZ0b-06oqQ3Srcxu8/view?usp=sharing",
  mail: "mailto:syedhazarath2525@gmail.com",
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/syed-hazarath-raza-quadri",
  gmail: "syedhazarath2525@gmail.com",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Frontend Development",
      fileName: "FrontEndImg",
      skills: [
        "⚡ Develop highly interactive user interfaces for web applications",
        "⚡ Building responsive website front end using React JS & Next JS",
        "⚡ Responsive Crafting Interfaces for Seamless User Interactions",
        "⚡ Web Performance Optimization, Techniques for Speed, Efficiency",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#593D88",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "SASS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#c66494",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Bit Bucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#2480f7",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "simple-icons:shopify",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Wix",
          fontAwesomeClassname: "simple-icons:wix",
          style: {
            color: "black",
            backgroundColor: "white",
            borderRadius: "8px",
          },
        },
        {
          skillName: "Code Review",
          fontAwesomeClassname: "simple-icons:codepen",
          style: {
            color: "light-black",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#2480f7",
          },
        }
      ],
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amrita Vishwa Vidyapeetham, Coimbatore",
      subtitle: "Masters in Computer Applications (MCA)",
      logo_path: "amrita_logo.png",
      alt_name: "Amrita University",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence, Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.amrita.edu/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University, New Delhi",
      subtitle: "Bachelors in Computer Applications (BCA)",
      logo_path: "ggsipu_logo.png",
      alt_name: "GGSIPU",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 4 years of experience as a Frontend Developer. I've worked on building projects Web Applications and eCommerce Webistes.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Frontend Engineer",
        company: "Una Brands",
        company_url: "https://www.una-brands.com/",
        logo_path: "una-brands.png",
        alt_name: "una-logo",
        duration: "(Sep, 2021 - Dec, 2023)",
        location: "Bangalore (Hybrid)",
        description: "<li> Responsible for managing and maintaining multiple websites concurrently.</li><br><li>Development and maintenance of frontend interfaces for all websites.</li><br><li>Built websites include a mix of React.js + Next.js applications and (D2C) eCommerce platforms.</li><br><li>Knowledgeable in jQuery library usage, employing its simplified syntax to streamline JavaScript coding, handle events, and manipulate the Document Object Model (DOM).</li><br><li>Capable of identifying and resolving frontend issues, bugs, and challenges during the development process.</li><br><li>Skilled in JavaScript for implementing interactive elements, dynamic functionalities, and client-side scripting on websites.</li><br><li>Worked on Speed optimizing and SEO of E-commerce and Web Applications.</li>",
        color: "#000000",
      },
      {
        title: "UI Developer",
        company: "Balance Nutrition",
        company_url: "https://www.balancenutrition.in/",
        logo_path: "balance-nutrition.png",
        alt_name: "bn-logo",
        duration: "(Apr, 2021 - Aug, 2021)",
        location: "Mumbai (On-site)",
        description: "<li> Primary responsibility for managing the entire frontend of the main Balance Nutrition website.</li><br><li>Focuses on frontend development, encompassing the user interface and user experience aspects of the website.</li><br><li>Responsible for ensuring the website's visual appeal, functionality, and performance.</li><br><li>Handles urgent bug fixes and critical issues on the live site, understanding the importance of maintaining the website's stability and usability for visitors.</li>",
        color: "#0071C5",
      },
      {
        title: "Web Developer",
        company: "Talleen Technologies",
        company_url: "https://talleen.in/",
        logo_path: "talleen.png",
        alt_name: "talleen-logo",
        duration: "(Nov, 2019 - Mar, 2021)",
        location: "Bangalore (On-site)",
        description: "<li> Proficient in HTML (HyperText Markup Language), the core structure for web pages.</li><br><li> Skilled in JavaScript for implementing interactive elements, dynamic functionalities, and client-side scripting on websites.</li><br><li> Utilizes JavaScript to enhance user experiences, validate forms, create animations, and handle asynchronous requests.</li><br><li> Knowledgeable in jQuery library usage, employing its simplified syntax to streamline JavaScript coding, handle events, and manipulate the Document Object Model.</li><br><li>Proficiency in using Bootstrap framework for front-end development.</li><br><li>Capable of identifying and resolving frontend issues, bugs, and challenges during the development process.</li>",
        color: "#0071C5",
      }
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN and MEAN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Crafty Commerce",
      url: "https://crafty-commerce.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/crafty-commerce",
      description:
        "Crafty Commerce is a frontend e-commerce web application that allows you to purchase different categories of product online. You can apply filters accordingly and find your favourite products in crafty commerce. You can pay with debit/credit cards and in just few click your product will be delivered.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Cloudinary",
          iconifyClass: "logos:cloudinary-icon",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-1",
      name: "Tikkaway",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/sumit-sharma-02/tikkaway",
      description:
        "Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice, Fish, Fruits, Icecreams, Soft Drinks etc.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-2",
      name: "MEAN Agency",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/mean-agency",
      description:
        "Mean Agency is a full stack service provider web application that allows you to provide services to other companies.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Countdown Timer",
      url: "https://countdown-timer-sumit-sharma-02.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/countdown-timer",
      description: "A Simple React App for countdown to new year using hooks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/sumit-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "SpaceX Capsules",
      url: "https://spacex-capsules.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/spacex-capsules",
      description:
        "A React application which shows you the filtered spaceX capsules data.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
