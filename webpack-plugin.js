/**
 * Webpack Plugins
 *
 * 1. Handlebars
 */

import HandlebarsPlugin from 'handlebars-webpack-plugin';
import webpack from 'webpack';

const pluginHandlebars = new HandlebarsPlugin({
    entry: './index.hbs',
    output: './index.html',
    partials: []
})

export const plugins = [
    new webpack.HotModuleReplacementPlugin(),pluginHandlebars
]
