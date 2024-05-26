import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchArticles = async (subtype) => {
  try {
    const {
      data: { articles },
    } = await apiClient.get("/");
    return articles.filter((article) => article.subtype === subtype);
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export default apiClient;
