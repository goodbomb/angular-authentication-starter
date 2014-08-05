'use strict';
// Controller naming conventions should start with an uppercase letter
function MainCtrl($scope, $state, Auth, USER_ROLES, $cookieStore, Restangular) {

/* =======================================================================
	Session Control
======================================================================= */
	$scope.logout = function() {
		Auth.logout().then(function() {
			$state.go('auth.login');
		});
	};

	$scope.currentUser = null;
	$scope.isLoggedIn = Auth.isLoggedIn;
//	$scope.isAuthorized = Auth.isAuthorized;
	$scope.userRoles = USER_ROLES;

	Restangular.one('users', $cookieStore.get('uid')).get().then(function(currentUser){
		$scope.currentUser = currentUser;
	});
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$scope', '$state', 'Auth', 'USER_ROLES', '$cookieStore', 'Restangular'];
module.exports = MainCtrl;