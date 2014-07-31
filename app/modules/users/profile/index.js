'use strict';

module.exports = angular.module('users.profile',[])
	.config(require('./usersProfileConfig'))
	.controller('UsersProfileCtrl', require('./UsersProfileController'));