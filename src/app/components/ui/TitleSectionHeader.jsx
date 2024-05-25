"use client";
import PropTypes from "prop-types";

const TitleSectionHeader = ({ title }) => {
    return (
    <div className="com-titleWithfollow hlp-marginBottom-15">
      <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
    </div>
  );
}

TitleSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSectionHeader;
