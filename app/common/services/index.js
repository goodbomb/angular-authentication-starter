'use strict';

module.exports = angular.module('common.services', [])
	.service('alertService', require('./alertService.js'))
	.service('apiConfig', require('./apiConfig.js'))
	.factory('Auth', require('./Auth.js'))
	.factory('AuthInterceptor', require('./AuthInterceptor.js'))
	.service('formValidation', require('./formValidation.js'));