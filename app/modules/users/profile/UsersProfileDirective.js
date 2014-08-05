'use strict';

module.exports = function usersProfile() {
	return {
		controller: 'UsersProfileCtrl',
		template: require('./users-profile.html'),
		restrict: 'A',
		scope: true
	};
};