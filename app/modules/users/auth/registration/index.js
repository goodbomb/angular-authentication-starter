'use strict';

module.exports = angular.module('users.auth.registration', [])
	.directive('usersAuthRegistration', require('./usersAuthRegistrationDirective'))
	.controller('UsersAuthRegistrationCtrl', require('./UsersAuthRegistrationController'));