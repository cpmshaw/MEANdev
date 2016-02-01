'use strict';

var http = require('http');
var url = require('url');
var PORT = process.env.PORT || 8080;
var HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
var server;

//overide body with http://localhost?msg="hello"
function requestHandler(req, res){
  var parsedUrl = url.parse(req.url, true);
  var msg = parsedUrl.query.msg || "Hello world";
  res.writeHead(200, {"Content-Type": 'text/html'});
  res.end('<h1>'+msg+'</h1>');
}

function startupHandler(){
  var serverAddr = server.address();
  var outputMessage = 'Server is running at ';
  outputMessage += 'http://'+serverAddr.address;
  outputMessage += ':'+serverAddr.port;
  console.log(outputMessage);
}

server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, null, startupHandler);
