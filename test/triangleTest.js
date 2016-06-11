var assert = require('chai').assert;
var triangle = require('./../src/triangle');

describe('triangle', function() {
  describe('#checkTriangle(a,b,c)', function () {
    it('should return Equilateral when all three sides are equal', function() {
      assert.equal(triangle.checkTriangle(3,3,3), 'Equilateral');
    });

    it('should return Scalene when all three sides are different', function() {
      assert.equal(triangle.checkTriangle(1,2,3), 'Scalene');
    });

    it('should return Isosceles when only two sides are equal', function() {
      assert.equal(triangle.checkTriangle(1,2,2), 'Isosceles');
      assert.equal(triangle.checkTriangle(2,2,1), 'Isosceles');
      assert.equal(triangle.checkTriangle(2,1,2), 'Isosceles');
    });

    it('should return Not a Triangle when the sum of two sides is less than the third side', function() {
      assert.equal(triangle.checkTriangle(1,2,5), 'Not a Triangle');
      assert.equal(triangle.checkTriangle(1,2,5), 'Not a Triangle');
      assert.equal(triangle.checkTriangle(1,2,5), 'Not a Triangle');
    });

    it('should return Not a Triangle when there is a non positive side', function() {
      assert.equal(triangle.checkTriangle(-1,-1,1), 'Not a Triangle');
    });
  });
});
