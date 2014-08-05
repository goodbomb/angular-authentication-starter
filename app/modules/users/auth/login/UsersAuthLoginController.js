/*jshint camelcase: false */
'use strict';

function UsersAuthLoginCtrl($scope, $state, $cookieStore, Auth, AUTH_EVENTS, alertService) {

	var success = function(response) {
		$scope.currentUser = response;
		$cookieStore.put('uid', response.data.uid);
		$cookieStore.put('auth_token', response.data.auth_token);
		alertService.showAlert(AUTH_EVENTS.loginSuccess, 'alert-success');
		$state.go('profile', {id:$scope.currentUser.id});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.loginFailed, 'alert-danger');
	};

	$scope.credentials = {
		email: '',
		password: ''
	};

	$scope.login = function() {
		if ($scope.loginForm.$valid) {
			Auth.login($scope.credentials).then(success, error);
		}
	};

	// Logout function is in MainCtrl

}

UsersAuthLoginCtrl.$inject = ['$scope', '$state', '$cookieStore', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthLoginCtrl;