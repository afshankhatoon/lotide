const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const words2 = [];
const results2 = map(words2, word => word[0]);

const words3 = [" abc"];
const results3 = map(words3, word => word[0]);

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual,expected))
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

function eqArrays(arr1,arr2){
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
}

console.log(results1);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
console.log(results2);
assertArraysEqual(results2,[]);
console.log(results3);
assertArraysEqual(results3,[' ']);
