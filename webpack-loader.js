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
 */

const loaderBabel = {
    test: /.jsx?$/,
    loader: 'babel',
    query: {
	cacheDirectory: true
    }
}

const loaderStyle = {
    test: /\.css$/,
    exclude: [/node_modules/],
    loader: 'style!css!'
}

export const loaders = [
    loaderBabel,
    loaderStyle
]

export const resolve = {
    extensions: ['', '.js', '.jsx']
}
