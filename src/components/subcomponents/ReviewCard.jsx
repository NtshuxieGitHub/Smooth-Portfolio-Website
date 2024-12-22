/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "⭐",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure>
          <img
            src={imgSrc}
            width={40}
            height={40}
            alt={name}
            loading="lazy"
            className="img-box rounded-full"
          />
        </figure>

        <div>
          <p>{name}</p>

          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
