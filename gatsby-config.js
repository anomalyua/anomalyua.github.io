module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Anomaly New'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-internationalization',
      options: {
        locales: ['en', 'ua', 'es'],
        defaultLocale: 'ua'
      }
    }
  ]
}
