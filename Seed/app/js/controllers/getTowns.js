adsApp.controller('getTowns', ['$scope','townsData' ,function($scope, townsData){
	townsData.getTowns()
		.$promise
		.then(function (data){
			$scope.towns = data;
		});
}])