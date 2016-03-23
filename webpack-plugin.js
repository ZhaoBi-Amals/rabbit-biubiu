/**
 * Webpack Plugins
 *
 * 1. Handlebars
 */

import HandlebarsPlugin from 'handlebars-webpack-plugin'

const pluginHandlebars = new HandlebarsPlugin({
    entry: './index.hbs',
    output: './index.html',
    partials: []
})

export const plugins = [
    pluginHandlebars
]
