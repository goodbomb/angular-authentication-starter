'use strict';

module.exports = angular.module('users.auth',
	[
		require('./login').name,
		require('./password-reset').name,
		require('./registration').name
	])
	.config(require('./usersAuthConfig'))
	.controller('UsersAuthCtrl', require('./UsersAuthController'));