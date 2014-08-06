'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, $state, $cookieStore, Auth, AUTH_EVENTS, alertService) {

	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.loginSuccess, 'alert-success');
		$state.go('profile', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.loginFailed, 'alert-danger');
	};

	$scope.credentials = {
		email: '',
		password: ''
	};

	$scope.login = function(isValid) {
		if (isValid) {
			Auth.login($scope.credentials).then(success, error);
		}
	};

	// Logout function is in MainCtrl

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthLoginCtrl;