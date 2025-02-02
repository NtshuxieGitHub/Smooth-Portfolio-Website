import github from "../assets/social-icons/github.svg";
import linkedin from "../assets/social-icons/linkedin.svg";
import twitter from "../assets/social-icons/twitter.svg";
import instagram from "../assets/social-icons/instagram.svg";
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
import project1 from "../assets/works/project1.png";
import project2 from "../assets/works/project2.png";
import project3 from "../assets/works/project3.png";
import project4 from "../assets/works/project4.png";
import project5 from "../assets/works/project5.png";
import project6 from "../assets/works/project6.png";
import project7 from "../assets/works/project7.png";

const aboutItems = [
  {
    label: "Projects Done",
    value: 20,
  },
  {
    label: "Professional Experience",
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
    label: "Reviews",
    link: "#reviews",
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
    label: "Reviews",
    href: "#reviews",
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

const reviews = [
  {
    content:
      "Great developer! Discovered a creative solution for generating dashboards for our client.",
    name: "Jackie",
    imgSrc: "https://randomuser.me/api/portraits/women/70.jpg",
    company: "Opti-Num Solutions",
  },
  {
    content:
      "Dedicated! Spent extra time resolving issues and ensuring that all calculations were correct on dasboard. Highly recommended.",
    name: "KG",
    imgSrc: "https://randomuser.me/api/portraits/women/94.jpg",
    company: "Fraser Alexander",
  },
  {
    content:
      "Great Tech Support Leader! Ensured that all cases were up to date and were being attended to by the relevant people. Also very quick to react when needed.",
    name: "Jon",
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    company: "Opti-Num Solutions",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Moses",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    company: "Leo Designs",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Thabo",
    imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    company: "Kreative Devs",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "johan",
    imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    company: "Lion of Africa",
  },
];

const skillItem = [
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interaction",
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
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: tailwind,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: next,
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: python,
    label: "Python",
    desc: "Applications and Analytics",
  },
  {
    imgSrc: matlab,
    label: "MATLAb",
    desc: "Applications and Analytics",
  },
  {
    imgSrc: mssql,
    label: "MSSQLServer",
    desc: "Database",
  },
  {
    imgSrc: docker,
    label: "Docker",
    desc: "Deployment",
  },
];

const projects = [
  {
    imgSrc: project1,
    title: "Camping Guide Company Landing Page",
    tags: ["Web-design", "Development"],
    projectLink: "https://campinguide.ncmatpro.com//",
  },
  {
    imgSrc: project2,
    title: "Banking Company Landing Page",
    tags: ["Web-design", "Development"],
    projectLink: "https://hoobankclone.ncmatpro.com/",
  },
  {
    imgSrc: project3,
    title: "AI Prompt Application",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://geminiclone.ncmatpro.com/",
  },
  {
    imgSrc: project4,
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://buzzing.ncmatpro.com/",
  },
  {
    imgSrc: project5,
    title: "Real Estatge Company Landing Page",
    tags: ["Web-design", "Development"],
    projectLink: "https://realestate.ncmatpro.com/",
  },
  {
    imgSrc: project6,
    title: "AI Image Generator Application",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://aiimagegen.ncmatpro.com/",
  },
  {
    imgSrc: project7,
    title: "3D Personal Portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://ncmatportfolio.ncmatpro.com/",
  },
];

export {
  aboutItems,
  socialLinks,
  navItems,
  sitemap,
  socials,
  reviews,
  skillItem,
  projects,
};
