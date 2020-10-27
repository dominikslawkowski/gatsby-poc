/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-poc-server",
      options: {
        apiUrl: "http://adf5c21973b4.ngrok.io",
      },
    },
  ],
}
