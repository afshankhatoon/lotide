const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item))
      results.push(item);
    else break;
  }
  return results;
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);