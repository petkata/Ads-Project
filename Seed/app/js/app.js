'use strict'
var adsApp = angular.module('adsApplication',['ngRoute', 'ngResource']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'Seed/app/templates/home.html',
		controller: 'HomeCtrl'
	});
	$routeProvider.when('/login', {
		templateUrl: 'Seed/app/templates/login.html',
		controller: 'LoginCtrl'
	});
	$routeProvider.when('/register', {
		templateUrl: 'Seed/app/templates/registration.html',
		controller: 'RegCtrl'
	});
	$routeProvider.otherwise({
		redirectTo: '/' 
	})
}]);