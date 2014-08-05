'use strict';

module.exports = angular.module('common.directives', [])
	.directive('autoFocus', require('./autoFocus.js'))
	.directive('systemNotifications', require('./systemNotifications.js'))
	.directive('showFormErrors', require('./showFormErrors.js'));