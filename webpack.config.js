module.exports = {
    entry: './main.js',
    output: {
	path: __dirname,
	filename: 'bundle.js'
    },
    module: {
	loaders: [{
		test: /\.jsx?$/,
		loader: "babel",
		query: {
		    cacheDirectory: true,
		    presets: ["es2015", "react"]
		}
	    }]
    }
}
