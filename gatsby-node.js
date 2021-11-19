exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.po$/,
          use: 'react-localized-loader'
        }
      ]
    }
  })
}
