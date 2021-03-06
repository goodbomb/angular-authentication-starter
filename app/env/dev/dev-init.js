'use strict';

function devInit($rootScope, Restangular, apiConfig, ENV) {

	$rootScope.$broadcast('ENV_DEV');
	$rootScope.serverUrl = ENV.DEV.serverUrl;
	// Restangular BaseURL Config
	Restangular.setBaseUrl(apiConfig.API.DEV.paths.baseUrl);
	
}

devInit.$inject = ['$rootScope', 'Restangular', 'apiConfig', 'ENV'];
module.exports = devInit;