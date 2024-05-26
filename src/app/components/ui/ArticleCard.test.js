import React from "react";
import { render } from "@testing-library/react";
import ArticleCard from "./ArticleCard";

describe("ArticleCard", () => {
  const article = {
    headlines: { basic: "Test Headline" },
    promo_items: { basic: { url: "http://example.com/image.jpg" } },
    display_date: "2023-01-01",
  };

  it("renders article headline", () => {
    const { getByText } = render(<ArticleCard article={article} />);
    expect(getByText("Test Headline")).toBeInTheDocument();
  });

  it("renders article image", () => {
    const { getByAltText } = render(<ArticleCard article={article} />);
    expect(getByAltText("article image")).toHaveAttribute(
      "src",
      "http://example.com/image.jpg"
    );
  });

  it("renders article date", () => {
    const { getByText } = render(<ArticleCard article={article} />);
    expect(getByText("2023-01-01")).toBeInTheDocument();
  });
});
