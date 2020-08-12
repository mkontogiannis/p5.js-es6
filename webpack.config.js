const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: "inline-sourcemap",
	entry: __dirname + '/src/js/sketch.js',
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'js/sketch.js'
	},
	devServer: {
		inline: true,
		hot: true,
		port: 3333
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{
					from: 'src/index.html',
					to: 'index.html'
				},
				{
					from: 'src/assets',
					to: 'assets'
				}
			],
		})
	]
}