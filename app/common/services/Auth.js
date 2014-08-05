/*jshint camelcase: false */
'use strict';

var Auth = function($rootScope, $http, $q, $cookieStore, Restangular, AUTH_EVENTS) {

	var authService = {

		login: function(credentials) {
			var success = function(response) {
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$cookieStore.put('uid', response.data.uid);
				$cookieStore.put('auth_token', response.data.auth_token);
			};

			var error = function() {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				// Change 'wrongCredentials' to a global alert display function
				$rootScope.wrongCredentials = true;
			};

			return $http.post('api/user/login', credentials).then(success, error);
		},

		isLoggedIn: function() {
			return ($cookieStore.get('auth_token')) ? true : false;
		},

		logout: function() {
			return $http.delete('user/logout').then(function() {
				$cookieStore.remove('auth_token');
				$cookieStore.remove('uid');
			});
		},

	    currentUser: null,

	    isAuthenticated: function(){
	        return !!authService.currentUser;
	    }

	};

	return authService;

};

Auth.$inject = ['$rootScope', '$http', '$q', '$cookieStore', 'Restangular', 'AUTH_EVENTS'];
module.exports = Auth;