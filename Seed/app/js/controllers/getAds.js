adsApp.controller('getAds',['$scope','adsData', function($scope, adsData){
	$scope.ready = false;
	adsData.getPublicAds()
	.$promise
	.then(function (data){
		$scope.ads= data.ads; 
		$scope.ready = true;
	}) 
}])


function handleMissingImg(ele)
{
     ele.src = 'Seed/app/img/brokenLink.png';
}