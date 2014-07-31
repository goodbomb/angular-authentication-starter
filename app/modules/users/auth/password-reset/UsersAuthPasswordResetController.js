'use strict';

function UsersAuthPasswordResetCtrl($rootScope, $scope) {
	
	$scope.resetPassword = function() {
		if ($scope.PasswordResetForm.$valid) {
			console.log('Sending request to server.');
		}
	};

	console.log('UsersAuthPasswordResetCtrl');

}

UsersAuthPasswordResetCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthPasswordResetCtrl;