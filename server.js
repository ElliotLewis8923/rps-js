var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/lib'));

app.get('/', function(req, res) {
	res.render('index.ejs');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
});