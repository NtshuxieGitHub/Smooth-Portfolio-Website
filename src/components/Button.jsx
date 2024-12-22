/**
 * @copyright 2024 Ntshuxeko
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        download="NC Mathebula CV"
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ? (
          <img
            src={icon}
            alt="download_btn"
            className="material-symbols-rounded"
          />
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <img
            src={icon}
            alt="download_btn"
            className="material-symbols-rounded"
          />
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}

        {icon ? (
          <img
            src={icon}
            alt="download_btn"
            className="material-symbols-rounded"
          />
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline" + classes}>
        {label}

        {icon ? (
          <img
            src={icon}
            alt="download_btn"
            className="material-symbols-rounded"
          />
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
