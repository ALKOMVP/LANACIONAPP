import React from "react";
import ArticlesPage from "./components/ArticlesPage";
import AsideBanner from "./components/ui/AsideBanner";

export default function Home() {
  return (
    <div id="wrap">
      <main>
        <div className="lay-sidebar">
          <div className="sidebar__main">
            <ArticlesPage  />
          </div>
          <AsideBanner title="Recetas más leídas" />
        </div>
      </main>
    </div>
  );
}
