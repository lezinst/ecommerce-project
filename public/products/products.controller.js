angular.module('App').controller('productsCtrl', function($scope, $stateParams, productsService){

	// $scope.getSpecProduct = getSpecProduct;

	console.log(productsService.test());




	function getProducts(){
		productsService.getProducts().then(function(response){
			$scope.Products = response;
			console.log($scope.Products[0].imageUrl);
		});
	}

	getProducts();

	$scope.test = console.log('connected to controller.js')

	// var getSpecProduct = function(){
	// 	productsService.getSpecProduct($stateParams);

	// }


})