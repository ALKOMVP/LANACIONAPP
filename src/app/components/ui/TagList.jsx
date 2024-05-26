"use server";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const TagList = ({ tags }) => {
  return (
    <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {tags.map((tag) => (
        <Link key={tag.slug} href={`/tema/${tag.slug}`}>
          {tag.text} ({tag.count})
        </Link>
      ))}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagList;
