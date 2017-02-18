const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (env) {
  return {
    entry: './src/app/app.module.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.prod
          ? '[name].[hash].js'
          : '[name].bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        baseHref: env.prod ? '/wine/' : '/',
        template: './src/index.ejs',
        filename: 'index.html'
      })
    ],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    },

    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: 'style-loader!css-loader'
        }, {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};

// https://github.com/preboot/angular-webpack/blob/master/webpack.config.js
// https://github.com/erikras/react-redux-universal-hot-example/issues/171