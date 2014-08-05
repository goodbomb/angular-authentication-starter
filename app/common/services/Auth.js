/*jshint camelcase: false */
'use strict';

var Auth = function($http, $cookieStore, AUTH_EVENTS, alertService) {

	var authService = {

		signup: function(newUser) {
			return $http.post('api/user/sign_up', newUser);
		},

		login: function(credentials) {
			return $http.post('api/user/login', credentials).then(function(user){
				$cookieStore.put('uid', user.data.uid);
				$cookieStore.put('auth_token', user.data.auth_token);
				return user;
			});
		},

		isLoggedIn: function() {
			return ($cookieStore.get('auth_token')) ? true : false;
		},

		logout: function() {
			return $http.delete('user/logout').then(function() {
				$cookieStore.remove('auth_token');
				$cookieStore.remove('uid');
				alertService.showAlert(AUTH_EVENTS.logoutSuccess, 'alert-success');
			});
		},

	    currentUser: null,

	    isAuthenticated: function(){
	        return !!authService.currentUser;
	    }

	};

	return authService;

};

Auth.$inject = ['$http', '$cookieStore', 'AUTH_EVENTS', 'alertService'];
module.exports = Auth;