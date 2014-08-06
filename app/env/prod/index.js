'use strict';

module.exports = angular.module('env.prod',[])
    .run(require('./prod-init'));