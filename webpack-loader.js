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

export const resolve = {
    extensions: ['', '.js', '.jsx']
}
