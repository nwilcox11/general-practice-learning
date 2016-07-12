'use strict';
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
  // a^2 + b^2 = c^2
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const pythagoreanTrip = () => {
  for(let a = 2; a < 1000; a++) {
    for(let b = 3; b < 1000; b++) {
      let c = 1000 - a - b;

        if((a*a) + (b*b) === (c*c)) {
          return a * b * c;
        }
    }
  }
};


console.log(pythagoreanTrip());
// 31875000
