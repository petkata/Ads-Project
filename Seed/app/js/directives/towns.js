adsApp.directive('towns', function(){
	// Runs during compile
	return {
		controller: 'getTowns',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'Seed/app/templates/public/towns.html',
		replace: true,
		
	};
});