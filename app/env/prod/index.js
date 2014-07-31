'use strict';

module.exports = angular.module('env.prod',[])
	.config(require('./prod-config'))
    .run(require('./prod-init'));