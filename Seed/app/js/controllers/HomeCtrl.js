adsApp.controller('HomeCtrl', ['$scope','auth', function($scope, auth){
	$scope.pageTitle = 'Home' ;
	$scope.isLoggedIn = auth.isLoggedIn();
}]);