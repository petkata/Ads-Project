testApp.controller('getCategories',function($scope,$http){
	$http.get("http://softuni-ads.azurewebsites.net/api/categories")
	.success(function(categories){
		$scope.cats = categories;
	})
})