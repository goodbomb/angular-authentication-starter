'use strict';

var showFormErrors = function($timeout) {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, element, attrs, controller) {
			$timeout(function() {
				controller.$focused = false;
				element.bind('focus', function() {
					scope.$apply(function() {
						controller.$focused = true;
					});
				}).bind('blur', function() {
					scope.$apply(function() {
						controller.$focused = false;
					});
				});
			});
		}
	};
};

showFormErrors.$inject = ['$timeout'];
module.exports = showFormErrors;