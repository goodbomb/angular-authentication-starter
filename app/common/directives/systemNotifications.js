'use strict';

var systemNotifications = function() {
    return {
    	// This directive works together with the alertService 
        restrict: 'EA',
        template: 	'<div class="system-notification alert alert-dismissible" ng-class="alertClass" ng-if="alertVisible">' +
        			'{{alertMessage}}' +
        			'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
        			'</div>'
    };
};

systemNotifications.$inject = [];
module.exports = systemNotifications;