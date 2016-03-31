var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// var port = 8000;

app.listen( 8000, function(){
	console.log('listening on port ' + 8000)
})


var db = mongojs('ecommerce', ['products']);




//middlewear

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());




//endpoints
 

app.use(bodyParser.json());

app.post('/api/products', function(req, res){
	res.send('working alright');


})

app.get('/api/products/', function(req, res){
	res.send('get all products');
})

app.get('/api/products:id', function(req, res){
	res.send('get product with Id');
})
app.delete('/api/products/:id', function(req, res){
	res.send('delete all products with Id');
})