"use server";
import React from "react";
import ArticleCard from "./ArticleCard";
import PropTypes from "prop-types";

const ArticlesList = ({ articles, itemsToShow }) => {
  let articlesToShow = articles.slice(0, itemsToShow - 1);
  return (
    <>
      {articlesToShow.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      headlines: PropTypes.object,
      promo_items: PropTypes.object,
      display_date: PropTypes.string,
    })
  ).isRequired,
  itemsToShow: PropTypes.number.isRequired,
};

export default ArticlesList;
