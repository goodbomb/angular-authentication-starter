'use strict';

function devInit($rootScope, Restangular, apiConfig) {

	$rootScope.$broadcast('ENV_DEV');
	// Restangular BaseURL Config
	Restangular.setBaseUrl(apiConfig.API.dev);
	
}

devInit.$inject = ['$rootScope', 'Restangular', 'apiConfig'];
module.exports = devInit;