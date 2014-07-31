'use strict';

function UsersProfileCtrl($rootScope, $scope, user) {
	$scope.user = user;
}

UsersProfileCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersProfileCtrl;