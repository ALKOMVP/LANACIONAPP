"use client";
import PropTypes from "prop-types";

const AsideBanner = ({ title }) => {
    return (
    <div className="sidebar__aside">
      <div className="banner --desktop --large"></div>
      <div className="com-ranking hlp-none hlp-tablet-none">
        <h2 className="com-title-section-m">{title}</h2>
      </div>
      <div className="banner --desktop --large"></div>
    </div>
  );
}

AsideBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AsideBanner;
