adsApp.controller('RegCtrl', ['$scope', 'townsData', function($scope, townsData){
	townsData.getTowns()
	 .$promise
	 .then(function (data){
	 	$scope.towns = data;
	 	console.log(data);
	 });
	 $scope.register = function (user){
	 	console.log(user);
	 }
}]);