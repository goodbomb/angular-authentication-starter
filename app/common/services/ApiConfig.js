'use strict';

var ApiConfig = function() {
	
/* =======================================================================
	Rails API Configuration
======================================================================= */
	var apiVersion = 'v1';
	this.API = {
		dev: 'api/' + apiVersion + '/',
		prod: 'api/' + apiVersion + '/'
	};

	return this;
};

ApiConfig.$inject = [];
module.exports = ApiConfig;