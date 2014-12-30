adsApp.controller('getAds', function($scope,$http){
	$http.get("http://softuni-ads.azurewebsites.net/api/ads")
	.success(function(advertisements)
	{
		$scope.ads = advertisements.ads;
	})
})


function handleMissingImg(ele)
{
     ele.src = 'Seed/app/img/brokenLink.png';
}