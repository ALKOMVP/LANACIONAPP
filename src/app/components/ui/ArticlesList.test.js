import React from "react";
import { render } from "@testing-library/react";
import ArticlesList from "./ArticlesList";

describe("ArticlesList", () => {
  const articles = [
    { _id: 1, headlines: { basic: "Article 1" }, display_date: "2023-01-01" },
  ];
  const itemsToShow = 8;

  it("passes the correct props to each ArticleCard", () => {
    const { getByText } = render(
      <ArticlesList articles={articles} itemsToShow={itemsToShow} />
    );
    articles.slice(0, itemsToShow).forEach((article) => {
      expect(getByText(article.headlines.basic)).toBeInTheDocument();
      expect(getByText(article.display_date)).toBeInTheDocument();
    });
  });
});
