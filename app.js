var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Hello world!');
});

app.get('/about', function (req, res){
	res.send('<html><body><h1>Hello</h1></body></html>');
});

app.get('/add', function (req, res){

	var total = 0;
	for(i=0; i<=100; i++){
		total = total + i;
	}
	res.send('The answer is ' + total);
});

app.get('/addwhile', function (req, res){

	var total = 0;
	var i = 0;
	while(i<=100){
		total = total + i++;
	}
	res.send('The answer is ' + total);
});

var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});