'use strict';

function UsersCtrl($rootScope, $scope, user) {

	$scope.user = user;
	
}

UsersCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersCtrl;