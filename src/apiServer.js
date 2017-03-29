// "use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("../../lib/Server");
const webpackConfig = require("./webpack.config");

export default (PORT) => {

	const compiler = Webpack(webpackConfig);
	const server = new WebpackDevServer(compiler, {
		stats: {
			colors: true
		},
		proxy: {
      '/' : {
      	target: `http://localhost:${PORT - 1}/webwiki`,
      	publicPath: "/webwiki/",
      	changeOrigin: true,
      	secure: false
      }
    },
	});

}

server.listen(PORT, 'localhost', function() {
	console.log('Starting server on http://localhost:'+PORT);
});


// proxy:  {
//       '/': {
//       	target: 'http://localhost:8888/webwiki',
//       	// proxy to backend

//       	publicPath: "/webwiki/",
//       	changeOrigin: true,
//       	secure: false
//       }
//     }