'use strict';

var autoFocus = function($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            $timeout(function() { element[0].focus(); });
        }
    };
};

autoFocus.$inject = ['$timeout'];
module.exports = autoFocus;