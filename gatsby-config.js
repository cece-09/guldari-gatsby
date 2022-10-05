require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// import './env.js';

module.exports = {
  siteMetadata: {
    title: `리마켓 프로젝트`,
    description: `this is site description`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "pozmidnqw1nj",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
