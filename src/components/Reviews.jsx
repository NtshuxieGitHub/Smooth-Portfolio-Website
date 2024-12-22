/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { reviews } from "../constants";
import ReviewCard from "./subcomponents/ReviewCard";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Reviews = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What People Say About Me</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
