
var portNum = 8080;


var express = require('express');
var app = express();
var server = app.listen(portNum);

app.use(express.static('../Public'));

console.log("Server running on port: " + portNum + "!\n");