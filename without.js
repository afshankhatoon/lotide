const assertArraysEqual = function(actual, expected) {
  if(actual===expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

function without(arr1,arr2){
  var i;
  for(i=0;i<arr2.length;i++){
    const index=arr1.indexOf(arr2[i]);
    if(index!==-1)
      arr1.splice(index,1);
  }
  return arr1;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);