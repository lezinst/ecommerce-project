angular.module('App').service('productsService', function($http, $q){

	this.test = function(){
		return "connected to service";
	}

	this.getProducts = function() {
		return $http.get('/api/products').then(function(httpResonseObject){
			return httpResonseObject.data
		})
	}

	this.getSpecProduct = function(){
		return $http.get('/api/products/:id')
	}



	





});



// productsService.getProducts().then(doSomething).catch(handleErrors)