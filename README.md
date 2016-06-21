express-verify-alexa-request
----------------------------

Express middleware that will validate an Amazon Alexa skill request.  The certificate(s) used to validate the request signature are stored using stale-lru-cache to speed up response time.


````bash
npm install express-verify-alexa-request
````


````javascript
var verifyAlexaRequest  = require('express-verify-alexa-request');

router.use('/alexa', verifyAlexaRequest({ applicationId: 'foo' }), function (req, res, next) {
	// Send back a skill response
});


// You can also pass an array of application IDs if multiple skills use the same end-point.
router.use('/alexa', verifyAlexaRequest({ applicationId: ['foo', 'bar'] }), function (req, res, next) {
	// Send back a skill response
});

````
