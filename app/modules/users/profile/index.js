'use strict';

module.exports = angular.module('users.profile',[])
	.config(require('./usersProfileConfig'))
	.directive('usersProfile', require('./usersProfileDirective'))
	.controller('UsersProfileCtrl', require('./UsersProfileController'));