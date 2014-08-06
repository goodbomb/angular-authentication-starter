'use strict';

function UsersAuthCtrl($scope, formValidation) {
	// Cause Name
	$scope.nameRegex = formValidation.lettersOnly;
	// Email Address Form Validation
	$scope.emailRegex = formValidation.emailRegex;
}

UsersAuthCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersAuthCtrl;