/*jshint camelcase: false */
'use strict';

var AuthInterceptor = function($q, $cookies, $injector) {
	return {
		request: function(config) {
			config.headers = config.headers || {};
			if ($cookies.auth_token) {
				config.headers['x-session-token'] = $cookies.auth_token;
			}
			return config;
		},
		responseError: function(response) {
			if (response.status === 401) {
				$injector.get('$state').go('auth.login');
			}
			return $q.reject(response);
		}
	};
};

AuthInterceptor.$inject = ['$q', '$cookies', '$injector'];
module.exports = AuthInterceptor;