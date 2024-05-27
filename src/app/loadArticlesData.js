import { fetchArticles } from "../api/apiClient";
import { formatDate } from "../utils/index";
import { SUBTYPE_ARTICLES_INDEX } from "@/constants";

let firstTimeLoad = true;
let articlesData = [];
async function getArticles() {
  try {
    const res = await fetchArticles(SUBTYPE_ARTICLES_INDEX);
    return res;
  } catch (err) {
    console.log("An error has occurred", err);
  }
}

export default async function loadArticlesData() {
  articlesData = firstTimeLoad ? await getArticles() : articlesData;
  let articles = [];
  let tags = [];
  const buildInitialData = (articlesData) => {
    articles = articlesData;
    const tagMap = new Map();
    articles.forEach((article) => {
      article.taxonomy.tags.forEach((tag) => {
        if (tagMap.has(tag.slug)) {
          tagMap.set(tag.slug, {
            ...tag,
            count: tagMap.get(tag.slug).count + 1,
          });
        } else {
          tagMap.set(tag.slug, { ...tag, count: 1 });
        }
      });
      article.display_date = firstTimeLoad
        ? formatDate(article.display_date)
        : article.display_date;
    });
    const sortedTags = Array.from(tagMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    tags = sortedTags;
  };

  buildInitialData(articlesData);
  firstTimeLoad = false;
  return { articles, tags };
}
