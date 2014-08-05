// This is the main entry JS file for the DEVELOPMENT environment

'use strict';

require('angular');

module.exports = angular.module('myApp',
	[
		require('./common/common').name,
		require('./env/dev').name, // Development Environment Configuration
		require('./modules').name
	])
	.config(require('./appConfig'))
	.constant('version', require('../package.json').version)
	.run(require('./common/common-init.js'));