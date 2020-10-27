const assertArraysEqual = function(actual, expected) {
  console.log("actual :: "+midArray(actual));
  console.log("expected :: "+expected);
  if(eqArrays(midArray(actual),expected))
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

function midArray(arr){
  let len=Math.floor(arr.length/2);
  let ans=[];
  if(arr.length%2===0)
    ans.push(arr[len-1]);
  ans.push(arr[len]);
  return ans;
}

function eqArrays(arr1,arr2){
  console.log("1::: "+arr1.length+" 2:::: "+arr2.length);
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

assertArraysEqual([1, 2, 3, 4, 5], [3]);
assertArraysEqual([1, 2, 3, 4], [2, 3]);
assertArraysEqual([1, 2, 3, 4, 5], [3, 4]);
assertArraysEqual([1, 2, 3, 4], [2]);