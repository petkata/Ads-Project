'use strict'
var adsApp = angular.module('adsApplication',['ngRoute', 'ngResource', 'LocalStorageModule']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider){
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
	});
	localStorageServiceProvider.setPrefix('adsApp');
	//localStorageServiceProvider.setStorageType('localStorage');
}]);