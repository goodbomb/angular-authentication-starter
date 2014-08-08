'use strict';

module.exports = angular.module('users.profile',[])
	.directive('usersProfile', require('./usersProfileDirective'))
	.controller('UsersProfileCtrl', require('./UsersProfileController'));