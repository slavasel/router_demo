/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

    devtool: 'inline-source-map',

    entry: './app.js',

    output: {
        path: __dirname + '/__build__',
        filename: 'app.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/ui/__build__/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ],

    query: {
        presets: [
            'babel-preset-stage-0',
        ].map(require.resolve),
    }

}