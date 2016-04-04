angular.module('App').service('adminService', function($http){

	this.editProduct = function(id) {
		return $http.put('/api/editProduct/' + id).then(function(httpResonseObject){
			return httpResponseObject.data;
		})
	}


	this.deleteProduct = function(id){
		return  $http.delete('/api/delete/' + id).then(function(removedResponseObject){
			return removedResponseObject;
		})
	}


  this.getProducts = function() {
		return $http.get('/api/products').then(function(httpResonseObject){
			return httpResonseObject.data
		})
	}

	this.getSpecProduct = function(){
		return $http.get('/api/products/:id')
	}






})