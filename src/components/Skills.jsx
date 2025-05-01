/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { skillItem } from "../constants";
import SkillCard from "./subcomponents/SkillCard";

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">The Tools I Use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          This is a list of all my go to tools in my development process. I have
          used these while working in various professional and personal
          projects.
        </p>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
