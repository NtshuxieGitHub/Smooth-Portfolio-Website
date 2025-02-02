/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import assets from "../assets/index.js";
import { ButtonPrimary, ButtonOutline } from "./Button.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={assets.avatar}
                width={40}
                height={40}
                alt="avatar"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-blue-800">
                <span className="absolute inset-0 rounded-full bg-blue-800 animate-ping"></span>
              </span>
              Available For Hire
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building scalable and functional applications
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download Resume"
              icon={assets.download_btn}
              href={assets.cv}
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={assets.scroll_arrow}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-customBlue-800 via-25% to-customBlue-400/5 to-10% rounded-[60px] overflow-hidden">
            <img
              src={assets.me}
              width={656}
              height={800}
              alt="my-image"
              className="w-full"
            />
          </figure>

          <div className="">
            <span className="">
              <span className=""></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
