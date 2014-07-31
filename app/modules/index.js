'use strict';

module.exports = angular.module('modules',
	[
		require('./home').name,
		require('./users').name
	])
	.controller('MainCtrl', require('./MainController'));