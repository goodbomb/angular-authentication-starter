'use strict';

module.exports = angular.module('users',
	[
		require('./auth').name,
		require('./profile').name
	])
	.config(require('./usersConfig'))
	.controller('UsersCtrl', require('./UsersController'));