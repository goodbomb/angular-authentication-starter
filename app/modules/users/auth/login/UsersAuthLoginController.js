'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, AUTH_EVENTS) {

	$scope.credentials = {
		email: '',
		password: ''
	};
	
	$scope.login = function() {
		if ($scope.loginForm.$valid) {
			console.log('Sending request to server.');
		}
	};

	console.log('UsersAuthLoginCtrl');

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', 'AUTH_EVENTS'];
module.exports = UsersAuthLoginCtrl;