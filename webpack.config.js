/**
 * Created by ray on 11/16/16.
 */


const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    entry: './client/index.js',
    output: { path: `${__dirname}/public/js`, filename: 'app.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};

export default webpackConfig