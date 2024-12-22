/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import Navbar from "./Navbar.jsx";
import assets from "../assets/index.js";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0- w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src={assets.logo}
              width={40}
              height={40}
              alt="logo-svg"
              className="mt-5"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <img src={navOpen ? assets.close : assets.menu} alt="menu-svg" />
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
