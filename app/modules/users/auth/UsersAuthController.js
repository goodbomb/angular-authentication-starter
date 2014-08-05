'use strict';

function UsersAuthCtrl($scope, formValidation) {
	// Email Address Form Validation
	$scope.emailRegex = formValidation.emailRegex;
}

UsersAuthCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersAuthCtrl;