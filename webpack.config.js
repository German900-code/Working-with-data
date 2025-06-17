'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    watch: true,

    devtool: "source-map",

    module: {}
};