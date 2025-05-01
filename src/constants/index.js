// Social medi icons
import github from "../assets/social-icons/github.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import twitter from "../assets/social-icons/twitter.svg";
import instagram from "../assets/social-icons/instagram.svg";

// Skills icons
import figma from "../assets/skills/figma.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import node from "../assets/skills/node.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongodb.jpg";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.svg";
import next from "../assets/skills/next.png";
import python from "../assets/skills/python.svg";
import matlab from "../assets/skills/matlab.svg";
import mssql from "../assets/skills/mssql.png";
import docker from "../assets/skills/docker.svg";
import appwrite from "../assets/skills/appwrite.png";
import mysql from "../assets/skills/mysql.png";
import sklearn from "../assets/skills/sklearn.png";
import vercel from "..//assets/skills/vercel.jpg";
import html from "../assets/skills/html.jpg";

// Project Images
import project1 from "../assets/works/project1.png";
import project2 from "../assets/works/project4.png";
import project5 from "../assets/works/project5.png";

import project3 from "../assets/works/project3.png";
import project4 from "../assets/works/interprep.png";
import dashboard from "../assets/works/dashboard.png";

import churn_prediction from "../assets/works/churn_prediction.png";
import web_design_1 from "../assets/works/msics.png";
import web_design_2 from "../assets/works/acg.png";

const aboutItems = [
  {
    label: "Projects",
    value: 25,
  },
  {
    label: "Experience",
    value: 2.5,
  },
];

const socialLinks = [
  {
    href: "https://github.com/NtshuxieGitHub",
    icon: github,
    alt: "Github",
  },
  {
    href: "https://www.linkedin.com/in/ntshuxeko-mathebula",
    icon: linkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/ConfidenceM3",
    icon: twitter,
    alt: "Twitter",
  },
  {
    href: "https://www.instagram.com/ntshuxeko_mathebula/",
    icon: instagram,
    alt: "Instagram",
  },
];

const navItems = [
  {
    label: "Home",
    link: "#home",
    className: "nav-link active",
    ref: "",
  },
  {
    label: "About",
    link: "#about",
    className: "nav-link",
  },
  {
    label: "Work",
    link: "#work",
    className: "nav-link",
  },
  {
    label: "Contact",
    link: "#contact",
    className: "nav-link md:hidden",
  },
];

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/NtshuxieGitHub",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ntshuxeko-mathebula",
  },
  {
    label: "Twitter X",
    href: "https://x.com/ConfidenceM3",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ntshuxeko_mathebula/",
  },
];

const skillItem = [
  {
    imgSrc: python,
    label: "Python",
    desc: "Applications and Analytics",
  },
  {
    imgSrc: matlab,
    label: "MATLAB",
    desc: "Applications and Analytics",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interactivity",
  },
  {
    imgSrc: html,
    label: "HTML",
    desc: "Web Structure",
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "Web Styling",
  },
  {
    imgSrc: tailwind,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: sklearn,
    label: "Scikit-Learn",
    desc: "Machine Learning",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: node,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: express,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: next,
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: mssql,
    label: "MSSQLServer",
    desc: "Database",
  },
  {
    imgSrc: mysql,
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: appwrite,
    label: "Appwrite",
    desc: "Cloud Database",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: vercel,
    label: "Vercel",
    desc: "Deployment",
  },
  {
    imgSrc: docker,
    label: "Docker",
    desc: "Deployment",
  },
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Web Design",
  },
];

const projects = [
  {
    imgSrc: project1,
    title: "Camping Guide Company Landing Page",
    tags: ["Development", "Front-End"],
    projectLink: "https://campinguide.ncmatpro.com//",
  },
  {
    imgSrc: project2,
    title: "eCommerce website",
    tags: ["Development", "Front-End"],
    projectLink: "https://buzzing.ncmatpro.com/",
  },
  {
    imgSrc: project5,
    title: "Real Estate Company Landing Page",
    tags: ["Development", "Front-End"],
    projectLink: "https://realestate.ncmatpro.com/",
  },
  {
    imgSrc: project3,
    title: "AI Prompt Application",
    tags: ["API", "Full-Stack", "AI"],
    projectLink: "https://geminiclone.ncmatpro.com/",
  },
  {
    imgSrc: project4,
    title: "AI Interview Prep Helper",
    tags: ["API", "Full-Stack", "Firebase"],
    projectLink: "https://interprep.ncmatpro.com/sign-in",
  },
  {
    imgSrc: churn_prediction,
    title: "Telco Churn Predictive Modelling System",
    tags: ["ML", "Data Science", "Analytics"],
    projectLink:
      "https://github.com/NtshuxieGitHub/customer-churn-prediction-system",
  },
  {
    imgSrc: dashboard,
    title: "Car Sales Dashboard",
    tags: ["Power BI", "Data Analysis", "Analytics"],
    projectLink: "https://github.com/NtshuxieGitHub/Car-Sales-Dashboard",
  },
  {
    imgSrc: web_design_1,
    title: "MSICS Landing Page",
    tags: ["Web-design", "Development"],
    projectLink:
      "https://www.figma.com/proto/JTc1HsiYlJh2dkLSgSBzEr/MSICS?node-id=0-1&t=cYJNOi4T88Pytci6-1",
  },
  {
    imgSrc: web_design_2,
    title: "ACG Church Website",
    tags: ["Web-design", "Development"],
    projectLink:
      "https://www.figma.com/proto/AVMLd1IUYRTWmlmd2o3xOe/ACG?node-id=0-1&t=maoeZ8HQdZDVO8gM-1",
  },
];

export {
  aboutItems,
  socialLinks,
  navItems,
  sitemap,
  socials,
  skillItem,
  projects,
};
