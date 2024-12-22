/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import { projects } from "../constants";
import PortfolioCard from "./subcomponents/PortfolioCard";

const Projects = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <PortfolioCard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
