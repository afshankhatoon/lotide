const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual,expected))
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

/* function eqArrays(arr1,arr2){
  if(arr1.length!==arr2.length)
    return false;
  else{
    var i;
    for(i=0;i<arr1.length;i++){
      if(arr1[i]!==arr2[i])
        return false;
    }
    return true;
  }
} */


/* assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
 */
module.exports = assertArraysEqual;