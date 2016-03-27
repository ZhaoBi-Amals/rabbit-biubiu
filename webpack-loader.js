// @flow

/**
 * Webpack Loaders
 *
 * 1. es6 
 * babel-loader
 *
 * 2. css
 * css-loader
 * style-loader
 * postcss-loader
 * stylus-loader
 */

import path from 'path'

const loaderBabel = {
    test: /.jsx?$/,
    loader: 'babel',
    query: {
	cacheDirectory: true
    }
}

const loaderStyle = {
    test: /\.styl$/,
    exclude: [/node_modules/],
    loader: 'style!css!stylus!'
}

export const loaders = [
    loaderBabel,
    loaderStyle
]

const roots = [
    path.resolve('./Application'),
    path.resolve('./Style'),
    path.resolve('./Tool')
]


export const resolve = {
    root: roots,
    extensions: ['', '.js', '.jsx']
}
