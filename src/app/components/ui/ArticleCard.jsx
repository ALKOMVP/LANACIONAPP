"use server";
import React from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ article }) => {
  const { headlines, promo_items, display_date } = article;
  return (
    <article className="mod-caja-nota w-100-mobile">
      <section className="cont-figure">
        <a href="" className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={promo_items?.basic?.url}
              alt="article image"
              className="content-img w-100"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="">{headlines?.basic}</a>
        </h2>
        <h4 className="com-date">{display_date}</h4>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    headlines: PropTypes.shape({
      basic: PropTypes.string,
    }),
    promo_items: PropTypes.shape({
      basic: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
    display_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;
