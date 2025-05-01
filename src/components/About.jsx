/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { aboutItems } from "../constants";
import assets from "../assets";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi there! I&apos;m Ntshuxeko, a passionate developer with experience
            in Software Engineering, Consulting, Business Intelligence, and
            Application Development.
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&apos;m especially drawn to Web Development and Data Science,
            currently focused on building both data science systems and
            full-stack web applications. My goal is to become a full-stack
            developer focused on building web applications that incorporate data
            science solutions.
          </p>

          <div className="flex flex-wrap items-cnter gap-4 md:gap-7">
            {aboutItems.map(({ label, value }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {value}
                  </span>
                  <span className="text-blue-800 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src={assets.logo}
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
