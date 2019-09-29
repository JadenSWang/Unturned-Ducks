const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;

https.createServer({
	key: fs.readFileSync('./private/ssl/server.key'),
	cert: fs.readFileSync('./private/ssl/server.cert')
}, app)
	.listen(port, function () {
		console.log('Server running on port: ' + port);
	});

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: path.join(__dirname, './') });
});

app.use(express.static('./public'));