/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { sitemap, socials } from "../constants";
import assets from "../assets";
import { ButtonPrimary } from "./Button";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together!
            </h2>
            <ButtonPrimary
              href="mailto:ntshuxekom@ncmatpro.com"
              label="Get in contact with me 🙂"
              icon={assets.email}
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src={assets.logo} width={40} height={40} alt="logo" />
          </a>

          <p className="text-zinc-500 text-sm">
            &copy; 2024{" "}
            <span className="text-zinc-200 ">
              Ntshuxeko Confidence Mathebula
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
