/*jshint camelcase: false */
'use strict';

var Auth = function($http, $cookieStore, AUTH_EVENTS, alertService) {

	var authService = {

		login: function(credentials) {
			return $http.post('api/user/login', credentials);
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