var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!!");
    res.end();
});

module.exports = app;
