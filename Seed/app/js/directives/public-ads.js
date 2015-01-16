adsApp.directive('publicAds', function(){
	// Runs during compile
	return {
		controller: 'getAds',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'Seed/app/templates/public/ads.html',
		replace: true,
		
	};
});