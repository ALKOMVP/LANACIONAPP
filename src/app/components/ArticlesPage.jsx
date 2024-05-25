"use server";
import React from "react";
import TagList from "./TagList";
import ArticlesList from "./ArticlesList";
import ShowMoreSection from "./ShowMoreSection";
import TitleSectionHeader from "./ui/TitleSectionHeader";
import loadArticlesData from "@/app/loadArticlesData";
import { ITEMS_PER_PAGE } from "@/constants";

let itemsToShow = ITEMS_PER_PAGE;

export default async function ArticlesPage() {
  const { articles, tags } = await loadArticlesData();

  async function handleShowMore(resultsQty) {
    "use server";
    itemsToShow = resultsQty;
  }

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
        <ShowMoreSection
          handleShowMore={handleShowMore}
          isDisabled={itemsToShow > articles.length}
        />
      </section>
    </>
  );
}
