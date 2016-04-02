

var app = angular.module('App',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){


$stateProvider


	.state('home', {
		url: '/',
		templateUrl: 'products/products.html',
		controller: 'productsCtrl'

	})

	.state('home.child', {
		url:'/product:id'
		
	})

	.state('admin', {
		url:'/admin',
		templateUrl: 'products/products.html',
		controller: 'adminCtrl'
	})

	$urlRouterProvider.otherwise('/');

})











	