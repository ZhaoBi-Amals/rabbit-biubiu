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

/**
 * Image Loader
 *
 * @see {@link https://github.com/thetalecrafter/img-loader}
 */
const loaderImage = {
    test: /\.(jpe?g|png|gif|svg)$/,
    loader: 'url?limit=10000!img?progressive=true'
}

/**
 * Resolve File Path
 *
 * @see {@link https://webpack.github.io/docs/configuration.html#resolve}
 */
const roots = [
    path.resolve('./Application'),
    path.resolve('./Style'),
    path.resolve('./Tool'),
    path.resolve('./Image')
]

/**
 * Exports.
 */
export const loaders = [
    loaderBabel,
    loaderStyle,
    loaderImage
]

export const resolve = {
    root: roots,
    extensions: ['', '.js', '.jsx']
}
