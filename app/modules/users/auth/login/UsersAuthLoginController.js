'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, $state, $cookieStore, AUTH_EVENTS, Auth) {

	$scope.credentials = {
		email: '',
		password: ''
	};
	
	$scope.login = function() {
		if ($scope.loginForm.$valid) {
			Auth.login($scope.credentials).then(
				$state.go('profile', {id:$scope.currentUser.id})
			);
		}
	};

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'AUTH_EVENTS', 'Auth'];
module.exports = UsersAuthLoginCtrl;