'use strict';

var AUTH_EVENTS = (function() {
    return {
        loginSuccess: 'auth-login-success',
		loginFailed: 'auth-login-failed',
		logoutSuccess: 'auth-logout-success',
		sessionTimeout: 'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorized: 'auth-not-authorized'
    };
}());

AUTH_EVENTS.$inject = [];
module.exports = AUTH_EVENTS;