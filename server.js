var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// var port = 8000;

app.listen( 8000, function(){
	console.log('listening on port ' + 8000)
})


var db = mongojs('ecommerce', ['products'])

app.use(express.static('public'));




//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());




//endpoints
 


app.post('/api/products', function(req, res){
		db.products.save(req.body, function(err, response){
			if(err){
				res.status(500).send(err);
				
			} else {
				res.json(response);
			}
		});

});

app.get('/api/products', function(req, res){
	db.products.find(req.body, function(err, response){
		if(err){
			res.status(500).send(err);
		} else {
			res.json(response);
		}

	})
})




app.get('/api/products/:id', function(req, res){
	console.log(req)
	var id = req.params.id;
	console.log(id);
	db.products.findOne({_id : mongojs.ObjectId(id)}, function(err, response){
		if(err){
			res.status(400).send(err);
		} else {
			res.json(response);
		}
	})
})




app.delete('/api/products/:id', function(req, res){
	var id = req.params.id;
	db.products.remove({_id: mongojs.ObjectId(id)}, function(err, response){
		if(err){
			res.status(400).send(err);
		} else {
			res.json(response);
		}
	})
})