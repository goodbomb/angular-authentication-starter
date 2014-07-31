'use strict';

module.exports = function usersAuthPasswordResetDirective() {
	return {
		controller: 'UsersAuthPasswordResetCtrl',
		template: require('./users-auth-password-reset.html'),
		restrict: 'A',
		scope: true
	};
};