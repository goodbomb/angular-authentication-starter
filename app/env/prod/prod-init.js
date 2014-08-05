'use strict';

function prodInit($rootScope, Restangular, apiConfig, ENV) {

	$rootScope.$broadcast('ENV_PROD');
	$rootScope.serverUrl = ENV.PROD.serverUrl;
	// Restangular BaseURL Config
	Restangular.setBaseUrl(apiConfig.API.prod);
	
}

prodInit.$inject = ['$rootScope', 'Restangular', 'apiConfig', 'ENV'];
module.exports = prodInit;