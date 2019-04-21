
var portNum = 8080;


var express = require('express');
var app = express();
var server = app.listen(portNum);

app.use(express.static('../Public'));

console.log("Server running on port: " + portNum + "!\n");


var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('New Connection: ' + socket.id);
	socket.on('movement', movement);
	socket.on('steal', stealtimer);
	function movement(data){
		socket.emit('movement', data);
		socket.broadcast.emit('enemymovement', data);
	}
	function stealtimer(data){
		setTimeout(function() {
  		socket.emit('stealblockrelease', true);
  		socket.broadcast.emit('stealblockrelease', true);
		}, 2000);
	}
}

