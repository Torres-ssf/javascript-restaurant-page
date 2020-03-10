module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};