var express = require('express');

app.get('/', function (req, res, err) {    
    res.end("Hello World!!");
});


module.exports = app;
