exports.checkTriangle = function (a, b, c) {
  if(hasValidSides(a,b,c)) {
    return 'Not a Triangle';
  } else {
    if(a == b && b == c) {
      return 'Equilateral';
    } else if(a == b || b == c || a == c) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }
}

function hasValidSides(a,b,c) {
  var hasNegativeSize = a <= 0 || b <= 0 || c <= 0;
  var sumOfTwoSidesGreaterThanThirdSide = a + b < c || a + c < b || b + c < a;

  return hasNegativeSize || sumOfTwoSidesGreaterThanThirdSide;
}
