'use strict';

var Alert = function($rootScope, $timeout) {

	var service = {
		showAlert: function(message, alertClasses) {
			console.log('show alert');

			$rootScope.alertVisible = true;
			$rootScope.alertMessage = message;
			$rootScope.alertClass = alertClasses;

			$timeout(function () {
	            service.hideAlert();
	        }, 3000);
		},

		hideAlert: function() {
			console.log('hide alert');

			$rootScope.alertVisible = false;
			$rootScope.alertMessage = '';
		}
	};

	return service;
};

Alert.$inject = ['$rootScope', '$timeout'];
module.exports = Alert;