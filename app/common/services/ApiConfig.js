'use strict';

var ApiConfig = function(ENV) {
	
/* =======================================================================
	Rails API Configuration
======================================================================= */
	var apiVersion = 'v1';
	// URLs are defined in the ENV constant
	this.API = {
		dev: ENV.DEV.url + apiVersion + '/',
		prod: ENV.PROD.url + apiVersion + '/'
	};

	return this;
};

ApiConfig.$inject = ['ENV'];
module.exports = ApiConfig;