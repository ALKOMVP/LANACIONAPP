"use server";
import React from "react";
import TagList from "./components/TagList";
import ArticlesList from "./components/ArticlesList";
import ShowMoreButton from "./components/ui/ShowMoreButton";
import TitleSectionHeader from "./components/ui/TitleSectionHeader";
import AsideBanner from "./components/ui/AsideBanner";
import loadArticlesData from "./loadArticlesData";

let itemsToShow = 8;

export default async function Home() {
  const { articles, tags } = await loadArticlesData();

  async function handleShowMore() {
    "use server";
    itemsToShow += 8;
  }
  
  return (
    <div id="wrap">
      <main>
        <div className="lay-sidebar">
          <div className="sidebar__main">
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
              <ShowMoreButton
                handleShowMore={handleShowMore}
                isDisabled={itemsToShow > articles.length}
              />
            </section>
          </div>
          <AsideBanner title="Recetas más leídas" />
        </div>
      </main>
    </div>
  );
}
