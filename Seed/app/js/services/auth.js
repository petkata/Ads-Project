adsApp.factory('auth', function(){
		var key = 'user';
		function saveUserData(data){
		localStorage.setItem(key, angular.toJson(data));
	}
	function getUserData(data){
		return angular.fromJson(localStorage.getItem(key));
	}
	function getHeaders(){
		var headers ={};
		var userData = getUserData;
		if(userData){
			headers.Auth = 'Bearer' + getUserData().access_token;
		};
		return headers;
	}
	function isLoggedIn(){
		return !!getUserData();
	}
	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		isLoggedIn: isLoggedIn
	};
});






/* adsApp.factory('auth', [function(localStorageService){
	var key = 'user';
	function saveUserData(data){
		localStorageService.set(key, data);
	}
	function getUserData(data){
		localStorageService.get(key);
	}
	return {
		saveUser: saveUserData,
		getUser: getUserData
	};
}])
*/