'use strict';

function UsersAuthRegistrationCtrl($scope, formValidation) {

	$scope.signupForm = function() {
		if ($scope.signupForm.$valid) {
			console.log('Sending request to server.');
		}
	};
	
	console.log('UsersAuthRegistrationCtrl');
}

UsersAuthRegistrationCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersAuthRegistrationCtrl;