'use strict';

var ENV = (function() {
    return {
        DEV: {
        	serverUrl: 'http://localhost:3000/'
        },
        PROD: {
        	serverUrl: '' // Make sure to set this before deploying to your live environment
        }
    };
}());

ENV.$inject = [];
module.exports = ENV;