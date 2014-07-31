'use strict';

var FormValidation = function() {

	this.alphaNum = /^[a-z\d\-_\s]+$/i;
	this.emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	this.websiteRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
	this.postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
	this.zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

	return this;
};

FormValidation.$inject = [];
module.exports = FormValidation;