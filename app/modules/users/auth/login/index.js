'use strict';

module.exports = angular.module('users.auth.login', [])
	.directive('usersAuthLogin', require('./usersAuthLoginDirective'))
	.controller('UsersAuthLoginCtrl', require('./UsersAuthLoginController'));