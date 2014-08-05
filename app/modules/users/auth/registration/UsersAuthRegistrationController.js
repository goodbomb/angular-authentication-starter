'use strict';

function UsersAuthRegistrationCtrl($scope) {

	$scope.signupForm = function() {
		if ($scope.signupForm.$valid) {
			console.log('Sending request to server.');
		}
	};
	
	console.log('UsersAuthRegistrationCtrl');
}

UsersAuthRegistrationCtrl.$inject = ['$scope'];
module.exports = UsersAuthRegistrationCtrl;