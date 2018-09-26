module.exports = {
  siteMetadata: {
    title: 'Michael Marlow - Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Michael Marlow Portfolio Site',
        short_name: 'Michael Marlow - Developer',
        start_url: '/',
        background_color: '#2e3141',
        theme_color: '#4c5c96',
        display: 'minimal-ui',
        icon: 'src/images/icon2.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
