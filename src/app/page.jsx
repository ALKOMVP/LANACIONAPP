import React from "react";
import ArticlesPage from "./components/ArticlesPage";

export default function Home({ searchParams: { page } }) {
  return <ArticlesPage page={page} />;
}
