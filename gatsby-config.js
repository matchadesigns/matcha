// Load env vars before anything reads process.env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");
const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

const queries = require("./src/lib/algolia");

module.exports = {
  siteMetadata: {
    title: "Mâtcha Designs",
    siteUrl: "https://matchadesigns.com",
    description:
      "Mâtcha Designs est un duo nantais proposant des services en décoration d'intérieur et graphisme. Retrouvez également leurs objets déco design sur la boutique en ligne.",
    author: "@matchadesigns",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "/src/assets/images"),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Mâtcha Designs",
        short_name: "matcha",
        start_url: "/",
        background_color: "#3A3419",
        theme_color: "#EDE6D9",
        display: "minimal-ui",
        icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "#3A3419",
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // Only index when the admin key is available (Vercel), so local builds don't fail
    process.env.ALGOLIA_API_KEY && {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/404.html", "/dev-404-page"],
      },
    },
    process.env.GOOGLE_ANALYTICS && {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS],
      },
    },
  ].filter(Boolean),
};
