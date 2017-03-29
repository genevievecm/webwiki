const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {

	entry: [
		'react-hot-loader/patch',
		//activate HMR for React

		'webpack-dev-server/client?http://localhost:8080',
		// bundle the client for webpack-dev-server
    // and connect to the provided endpoint

		'webpack/hot/only-dev-server',
		// bundle the client for hot reloading
    // only- means to only hot reload for successful updates

		'./index.js'
		// the entry point of our app
	],

	output: {
		filename: 'bundle.js',
		// the output bundle

		path: resolve(__dirname, 'src/public'),
		// the destination for the bundle

		publicPath: 'http://localhost:8080/src/public',
		// let HMR know where to load the hot update chunks
	},

	context: resolve(__dirname, './src'),
	// the base directory, an absolute path, for resolving entry points and loaders

	devtool: 'inline-source-map',
	// show line numbers in terminal where errors happen

	devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'src/public'),
    // match the output path

    publicPath: 'http://localhost:8080/src/public',
    // match the output `publicPath`
  },

	module: {
		rules: [
			{
				test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

		new webpack.NoEmitOnErrorsPlugin()
		// webpack will let you know if there are any errors
	]
}