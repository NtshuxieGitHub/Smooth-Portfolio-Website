/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Get In Touch To Collaborate
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Contact me today to discuss your projects needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon, alt }, key) => (
              <a
                href={href}
                key={key}
                target="_blank"
                className="w-12 h-12 place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-colors hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                <img src={icon} alt={alt} />
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/bdrrlyob"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Enter your name..."
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Enter your email..."
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="label reveal-up">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Enter your message..."
                className="text-field reveal-up"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
