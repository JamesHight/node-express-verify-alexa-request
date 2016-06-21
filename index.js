'use strict';


var VerifyAlexaSkillRequest = require('verify-alexa-skill-request');


/**
 * @param options {Object}
 *   @param {RegExp} [options.urlPattern=RegExp('^https://s3\.amazonaws\.com(:443)?\/echo.api\/')] pattern used to verify signature URL
 *   @param {Object} options.cache
 *     @param {Number} [options.cache.maxAge=100] maximum age of cache
 *     @param {Number} [options.cache.staleWhileRevalidate=86400] maximum age of a staled cached certificate that can still be used
 *   @param applicationId {String|String[]} ID or array of IDs for the Alexa application
 **/

module.exports = function(options) {
	let verifyAlexaSkillRequest = new VerifyAlexaSkillRequest(options);

	return function(req, res, next) {
		verifyAlexaSkillRequest.verify(req.headers.signaturecertchainurl, req.headers.signature, req.body, next);
	}
};
