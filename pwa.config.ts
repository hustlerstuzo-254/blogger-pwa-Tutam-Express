import { defineConfig } from "@/types/config";

export default defineConfig({
  manifest: {
    id: "/",
    name: "TUTAM EXPRESS",
    short_name: "TUTAM",
    description: "Latest news in politics, business, technology, sports and entertainment in Kenya, Africa and the world.",
    dir: "ltr",
    lang: "en-KE",

    background_color: "#ffffff",
    theme_color: "#064e3b",

    display: "standalone",
    orientation: "natural",
    scope: "/",
    start_url: "/?utm_source=homescreen",

    prefer_related_applications: false,

    shortcuts: [
      {
        name: "Latest News",
        short_name: "News",
        description: "Latest news from TUTAM EXPRESS",
        url: "/search/label/News"
      },
      {
        name: "Politics",
        short_name: "Politics",
        description: "Political news and updates",
        url: "/search/label/Politics"
      },
      {
        name: "Technology",
        short_name: "Technology",
        description: "Technology news and updates",
        url: "/search/label/Technology"
      },
      {
        name: "Sports",
        short_name: "Sports",
        description: "Sports news and updates",
        url: "/search/label/Sports"
      }
    ]
  },

  pwa: {
    logs: true
  },

  oneSignal: {
    enabled: false
  },

  // Replace with your actual free Blogspot address
  origin: "https://tutamexpress.blogspot.com"
});
