const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const styleLoader = require('style-loader');
const cssLoader = require('css-loader');
const htmlLoader = require('html-loader');
const webpack = require('webpack');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
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
};

// https://github.com/preboot/angular-webpack/blob/master/webpack.config.js
// https://github.com/erikras/react-redux-universal-hot-example/issues/171