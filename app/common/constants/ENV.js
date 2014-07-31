'use strict';

var ENV = (function() {
    return {
        DEV: {
        	url: 'http://localhost:3000/'
        },
        PROD: {
        	url: '' // Make sure to set this before deploying to your live environment
        }
    };
}());

ENV.$inject = [];
module.exports = ENV;