"use server";
import React from "react";
import TagList from "./ui/TagList";
import ArticlesList from "./ui/ArticlesList";
import ShowMoreSection from "./ShowMoreSection";
import TitleSectionHeader from "./ui/TitleSectionHeader";
import loadArticlesData from "@/app/loadArticlesData";
import { ITEMS_PER_PAGE } from "@/constants";
import PropTypes from "prop-types";

export default async function ArticlesPage({ page }) {
  let itemsToShow = page ? page * ITEMS_PER_PAGE : ITEMS_PER_PAGE;
  const { articles, tags } = await loadArticlesData();

  return (
    <>
      <div className="row">
        <TitleSectionHeader title="Acumulado Grilla" />
      </div>
      <div className="row">
        <TagList tags={tags} />
      </div>
      <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
        <ArticlesList articles={articles} itemsToShow={itemsToShow} />
      </section>
      <section className="row">
        <ShowMoreSection isDisabled={itemsToShow >= articles.length} />
      </section>
    </>
  );
}

ArticlesPage.propTypes = {
  page: PropTypes.number.isRequired,
};
