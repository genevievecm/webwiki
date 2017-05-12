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

        path: resolve(__dirname, './public'),
        // the destination for the bundle

        publicPath: 'http://localhost:8080/public',
        // let HMR know where to load the hot update chunks
    },

    context: resolve(__dirname, './src'),
    // the base directory, an absolute path, for resolving entry points and loaders

    devtool: 'inline-source-map',
    // show line numbers in terminal where errors happen

    devServer: {
        hot: true,
        // enable HMR on the server

        historyApiFallback: {
            rewrites: [
                { from: /^\/webwiki/, to: '' },
            ]
        },
        // configure react router

        contentBase: resolve(__dirname, '/public'),
        // match the output path, where to serve content from

        publicPath: 'http://localhost:8080/public',
        // where the bundles should be served from
        // match the output `publicPath`

        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },

        proxy: {
            '/': 'http://localhost:8888/webwiki',
            // proxy the request to the above url
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
                    'sass-loader',
                ]
            },
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