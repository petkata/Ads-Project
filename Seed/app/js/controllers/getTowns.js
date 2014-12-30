adsApp.controller('getTowns', function($scope,$http){
	$http.get("http://softuni-ads.azurewebsites.net/api/towns")
	.success(function(towns)
	{
		$scope.towns = towns;
	})
})