var resolve = {
    extensions: ['', '.js', '.jsx']
};

var jsLoader = {
		test: /\.jsx?$/,
		loader: "babel",
		query: {
		    cacheDirectory: true,
		    presets: ["es2015", "react"]
		}
};

module.exports = {
    entry: './main.js',
    output: {
	      path: __dirname,
	      filename: 'bundle.js'
    },
    module: {
	      loaders: [jsLoader]
    },
    resolve: resolve
};
