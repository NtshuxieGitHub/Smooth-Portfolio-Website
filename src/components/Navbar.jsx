/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import { navItems } from "../constants";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  navItems[0].ref = lastActiveLink;
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrent = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrent}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
