const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const api_key = process.env.GOOGLEMAPS_KEY;
const webpack = require('webpack');
module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: false,
            template: './src/index.html',
            apiUrl: `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=initMap"
            type="text/javascript`
        }),
        new Dotenv({
            path: './.env'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'), 
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            api_key = process.env.GOOGLEMAPS_KEY
          })
    ],
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
