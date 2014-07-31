'use strict';

module.exports = angular.module('env.dev', [])
	.config(require('./dev-config'))	
    .run(require('./dev-init'));