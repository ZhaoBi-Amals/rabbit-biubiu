import { loaders, resolve } from './webpack-loader'
import { plugins } from './webpack-plugin'

export default {
    entry: './main.js',
    output: {
	path: __dirname,
	filename: 'bundle.js'
    },
    module: {
	loaders: loaders
    },
    plugins: plugins,
    resolve: resolve
}
