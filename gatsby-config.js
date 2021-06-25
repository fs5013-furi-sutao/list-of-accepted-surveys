module.exports = {
  pathPrefix: "list-of-accepted-surveys",
  siteMetadata: {
    siteTitle: `受付中のアンケート一覧`,
    defaultTitle: `受付中のアンケート一覧`,
    siteTitleShort: `受付中のアンケート一覧`,
    siteDescription: `FS の ITS メンバ向け受付中アンケートの一覧です`,
    siteUrl: `https://fs5013-furi-sutao.github.io/list-of-accepted-surveys/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.svg`,
    siteLanguage: `ja`,
    themeColor: `#007fff`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://fs5013-furi-sutao.github.io/list-of-accepted-surveys`,
        baseDir: `list-of-accepted-surveys`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/list-of-accepted-surveys/`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'time4action', // delete or `undefined` to disable password protection
        partialMatching: true,
        pagePaths: ['/list-of-accepted-surveys']
      }
    }
  ],
};
