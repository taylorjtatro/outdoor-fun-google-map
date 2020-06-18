const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const api_key = process.env.GOOGLEMAPS_KEY;
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
        new Dotenv()
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
