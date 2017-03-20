var getMin = require('../getMin');
var assert = require('assert');

describe('getMin Function', function() {
  describe('Test with a cost matrix', function() {
    it('should return true when the parameter is 5', function() {
      assert.equal(getMin([[0,100,40],[20,0,50],[100,5,100]]), 65);
    });
  });
  describe('Test with empty matrix', function() {
    it('should return 0 when the costs is empty', function() {
      assert.equal(getMin([]), 0);
    });
    it('should return 0 when the costs is zero', function() {
      assert.equal(getMin(0), 0);
    });
  });
});
