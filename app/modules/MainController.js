'use strict';
// Controller naming conventions should start with an uppercase letter
function MainCtrl($rootScope, $scope, $state, $cookieStore, Restangular, Auth, USER_ROLES) {

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


/* =======================================================================
	System Notifications
======================================================================= */
	$rootScope.alertVisible = false;
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;