var assert = require('assert');
var main = require('../lib/main');

describe('Practice Test', function() {
	it('Returns a "Random Number"', function() {
		assert.equal(4, main.getRandomNumber());
	});
});
