'use strict';

module.exports = angular.module('users.auth.password-reset', [])
	.directive('usersAuthPasswordReset', require('./usersAuthPasswordResetDirective'))
	.controller('UsersAuthPasswordResetCtrl', require('./UsersAuthPasswordResetController'));