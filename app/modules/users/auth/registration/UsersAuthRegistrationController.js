/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope, $state, $cookieStore, Restangular, Auth, AUTH_EVENTS, alertService) {

	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.user = {
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	};

	$scope.signup = function(isValid) {
		if (isValid) {
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Restangular', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationCtrl;