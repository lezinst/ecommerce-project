angular.module('App').controller('adminCtrl', function($scope, adminService){


function getProducts(){
		adminService.getProducts().then(function(response){
			$scope.Products = response;
			console.log($scope.Products[0].imageUrl);
		});
	}

	getProducts();


	function deleteProduct(_id){
		adminService.deleteProduct().then(function(response){
			$scope.productName = response;
		})
	}
	//add the edit function to the service
   //add the delete function to the service

   function EditProduct(_id){
		adminService.deleteProduct().then(function(response){
			$scope.changedProductName = response;
		})
	}
	
})