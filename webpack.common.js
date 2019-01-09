const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [
                    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
                    {  test: /\.s?css$/,
                        use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                        })
                    }
                ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js"
        }),
        new ExtractTextPlugin({
            filename: "style.css"        
        })
    ]
}