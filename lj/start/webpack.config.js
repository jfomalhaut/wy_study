module.exports = {
	entry: [
		"@babel/polyfill",
		"./src/index.js"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.(pdf|jpg|png|gif|svg|ico|jpeg)$/,
				use: [
					{ 
						loader: 'url-loader', 
						options: {
							limit: 1000,
							fallback: 'file-loader',
							name: 'assets/images/[name].[ext]'
						}
					}
				]
			},
		]
	}, 
	resolve: {
		extensions: ["*", ".js"]
	},
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}