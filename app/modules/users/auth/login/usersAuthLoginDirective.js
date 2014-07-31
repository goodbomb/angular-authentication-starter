'use strict';

module.exports = function usersAuthLoginDirective() {
	return {
		controller: 'UsersAuthLoginCtrl',
		template: require('./users-auth-login.html'),
		restrict: 'A',
		scope: true
	};
};