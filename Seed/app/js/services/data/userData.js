adsApp.factory('userData', ['$resource', 'baseServiceUrl', 'auth', function($resource, baseServiceUrl, auth){
	
	function registerUser(user){
		return $resource(baseServiceUrl+'user/register')
				.save(user)
				.$promise
				.then(function (data){
					auth.saveUser(data);
				});
	}
	function loginUser(user){
		var resource = $resource(baseServiceUrl+'user/login')
			 .save(user);
		 resource
				.$promise
				.then(function (data){
					auth.saveUser(data);
				});
		return resource;
	}
	function logoutUser(){
		return $resource(baseServiceUrl+'user/logout')
				.save(user)
				.$promise
				.then(function (data){
					auth.removeUser();
				});
	}
	function removeUser(){
		localStorage.removeItem(key);
	}
	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser,
		removeUser: removeUser
	};
}])