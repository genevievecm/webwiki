import express from 'express';

export default appServer = (PORT) => {
  const app = express();

  app.get(`http://localhost:${PORT}`, function (req, res) {
	  res.send('Hello World!');
	});

  app.listen(PORT, 'localhost', function() {
		console.log('Starting server on http://localhost:'+PORT);
	});
};