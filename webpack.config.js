var webpack = require('webpack');
var path    = require('path');

module.exports = {
	devtool: 'inline-source-map',
	// devServer: {
	// 	historyApiFallback: true,
	// },
	entry: [
		'webpack-dev-server/client?http://localhost:8888',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, './'),
		filename: 'bundle.js'
	},
	resolve: {
		// modulesDirectories: ['./node_modules', './src'],
		extensions: ['*', '.js', '.jsx', '.json'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}

console.log('app loaded');