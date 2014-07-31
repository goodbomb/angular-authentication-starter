'use strict';

module.exports = function UsersAuthRegistrationDirective() {
	return {
		controller: 'UsersAuthRegistrationCtrl',
		template: require('./users-auth-registration.html'),
		restrict: 'A',
		scope: true
	};
};