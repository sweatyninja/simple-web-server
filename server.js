var express = require('express');
var http = require('http');
var path = require('path')

///////////////////////////////////////////////////
//MAIN APP
//////////////////////////////////////////////////

var main  = express();

main.get('/', (req, res) => {
   console.log(req.headers.host);
   console.log('SPACE TURTLE LAUNCHED!')
   res.sendFile(path.join(__dirname + '/index.html'));
});

http.createServer(main).listen(8080);

