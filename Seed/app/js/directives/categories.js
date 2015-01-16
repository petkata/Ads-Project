adsApp.directive('categories', function(){
	// Runs during compile
	return {
		controller: 'getCategories',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'Seed/app/templates/public/categories.html',
		replace: true,
		
	};
});