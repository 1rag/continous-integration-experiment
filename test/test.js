/**
 * Created by anurag on 17/05/16.
 */

var assert = require('assert');
var fizzbuzz = require('../');

describe('fizbuzz', function () {
    it('returns null when passed a non-number', function () {
        assert.equal(fizzbuzz('abc'), null);
    });
});