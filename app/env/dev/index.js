'use strict';

module.exports = angular.module('env.dev', [])	
    .run(require('./dev-init'));